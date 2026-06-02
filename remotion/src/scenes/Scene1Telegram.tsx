import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { theme } from "../theme";

const HEADER_H = 92;
const INPUT_H = 78;

const TelegramHeader: React.FC = () => (
  <div
    style={{
      height: HEADER_H,
      background: "#4A9D6E",
      display: "flex",
      alignItems: "flex-end",
      padding: "0 16px 12px",
      gap: 12,
      color: "#fff",
      fontFamily: "Inter, sans-serif",
    }}
  >
    <div style={{ fontSize: 26, opacity: 0.95 }}>‹</div>
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: theme.lime400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: 18,
        color: theme.sky950,
      }}
    >
      F
    </div>
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
      <span style={{ fontSize: 17, fontWeight: 700 }}>FlowMeUp</span>
      <span style={{ fontSize: 12.5, opacity: 0.85 }}>bot</span>
    </div>
  </div>
);

const Waveform: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = 34;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        flex: 1,
        height: 30,
        marginLeft: 12,
      }}
    >
      {Array.from({ length: bars }).map((_, i) => {
        const h =
          8 +
          (Math.sin(frame * 0.4 + i * 0.7) * 0.5 + 0.5) *
            (10 + ((i * 7) % 13));
        return (
          <div
            key={i}
            style={{
              width: 3,
              height: h,
              borderRadius: 2,
              background: theme.tgBlue,
              opacity: 0.85,
            }}
          />
        );
      })}
    </div>
  );
};

export const Scene1Telegram: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Recording pulse on the red dot.
  const pulse = 0.55 + (Math.sin(frame * 0.25) * 0.5 + 0.5) * 0.45;

  // Timer 0:00 -> counts up.
  const seconds = Math.floor(frame / fps);
  const ds = Math.floor((frame % fps) / (fps / 100));
  const timer = `0:${String(seconds).padStart(2, "0")},${String(ds).padStart(2, "0")}`;

  // Slide-to-cancel hint drifts left.
  const cancelX = interpolate(frame % 60, [0, 30, 60], [0, -8, 0]);

  // Send button pops in.
  const sendScale = spring({ frame: frame - 6, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ background: theme.tgBg }}>
      {/* subtle pattern */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.18) 0 2px, transparent 3px)",
          backgroundSize: "90px 90px, 120px 120px",
          opacity: 0.5,
        }}
      />
      <TelegramHeader />

      {/* Empty-chat placeholder pill */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(74,157,110,0.85)",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            padding: "7px 16px",
            borderRadius: 16,
          }}
        >
          Ancora nessun messaggio…
        </div>
      </AbsoluteFill>

      {/* Recording input bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: INPUT_H,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "0 14px 0 16px",
          gap: 10,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* red dot */}
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#E5484D",
            opacity: pulse,
          }}
        />
        <span style={{ fontSize: 15, color: theme.tgText, minWidth: 78 }}>
          {timer}
        </span>
        <span
          style={{
            fontSize: 14.5,
            color: theme.tgBlue,
            transform: `translateX(${cancelX}px)`,
            opacity: 0.9,
          }}
        >
          ‹ Annulla
        </span>
        <Waveform />
        {/* send */}
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: theme.tgBlue,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 22,
            transform: `scale(${sendScale})`,
            boxShadow: "0 4px 12px rgba(47,143,237,0.45)",
          }}
        >
          ↑
        </div>
      </div>
    </AbsoluteFill>
  );
};
