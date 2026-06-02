import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { theme } from "../theme";

const UI_FONT = "-apple-system, 'Segoe UI', Roboto, sans-serif";
const HEADER_H = 92;

const Header: React.FC = () => (
  <div
    style={{
      height: HEADER_H,
      background: theme.tgHeader,
      display: "flex",
      alignItems: "flex-end",
      padding: "0 16px 12px",
      gap: 12,
      color: "#fff",
      fontFamily: UI_FONT,
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

// Outgoing voice-note bubble (the lead just recorded).
const VoiceBubble: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ alignSelf: "flex-end", maxWidth: "78%" }}>
      <div
        style={{
          background: theme.tgBubbleOut,
          borderRadius: 16,
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: theme.tgHeader,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          ▶
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {Array.from({ length: 22 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 2.5,
                height: 6 + ((i * 5) % 14),
                borderRadius: 2,
                background: theme.tgHeader,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          fontSize: 11,
          color: theme.tgMeta,
          textAlign: "right",
          marginTop: 3,
          paddingRight: 4,
        }}
      >
        0:18 · 11:23 ✓✓
      </div>
    </div>
  );
};

const FieldLine: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div style={{ display: "flex", gap: 6, fontSize: 14.5, lineHeight: 1.5 }}>
    <span style={{ color: theme.tgMeta, fontWeight: 600 }}>{label}</span>
    <span style={{ color: theme.tgText }}>{value}</span>
  </div>
);

export const Scene2Telegram: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const voiceIn = spring({ frame, fps, config: { damping: 14 } });
  const replyIn = spring({
    frame: frame - 18,
    fps,
    config: { damping: 16 },
  });
  // Missing-info card slides in after the reply settles.
  const missingIn = spring({
    frame: frame - 48,
    fps,
    config: { damping: 15 },
  });
  const missingPulse =
    0.6 + (Math.sin((frame - 48) * 0.18) * 0.5 + 0.5) * 0.4;

  return (
    <AbsoluteFill style={{ background: theme.tgBg }}>
      <AbsoluteFill
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.18) 0 2px, transparent 3px)",
          backgroundSize: "90px 90px, 120px 120px",
          opacity: 0.5,
        }}
      />
      <Header />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: "16px 14px",
          fontFamily: UI_FONT,
        }}
      >
        <div
          style={{
            opacity: voiceIn,
            transform: `translateY(${(1 - voiceIn) * 16}px)`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <VoiceBubble />
        </div>

        {/* Bot reply */}
        <div
          style={{
            alignSelf: "flex-start",
            maxWidth: "88%",
            background: theme.tgBubbleIn,
            borderRadius: 16,
            padding: "13px 15px",
            opacity: replyIn,
            transform: `translateY(${(1 - replyIn) * 16}px)`,
            boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 14.5,
              color: theme.tgText,
              lineHeight: 1.5,
              marginBottom: 10,
            }}
          >
            Ho registrato il deal:
          </div>
          <FieldLine label="Deal:" value="Fornitura Materiale" />
          <div style={{ paddingLeft: 0, fontSize: 14.5, color: theme.tgText }}>
            Consumabile – Auto Torino
          </div>
          <FieldLine label="Cliente:" value="Auto Torino" />

          {/* Missing-info highlight */}
          <div
            style={{
              marginTop: 12,
              borderRadius: 12,
              border: `2px solid ${theme.lime500}`,
              background: "rgba(163,230,53,0.16)",
              padding: "10px 12px",
              opacity: missingIn,
              transform: `scale(${0.96 + missingIn * 0.04})`,
              boxShadow: `0 0 ${10 * missingPulse}px rgba(132,204,22,${0.45 * missingPulse})`,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#3F6212",
                marginBottom: 6,
              }}
            >
              Mi mancano 2 informazioni:
            </div>
            <div style={{ fontSize: 14.5, color: theme.tgText, lineHeight: 1.6 }}>
              1) Valore economico (EUR)
              <br />
              2) Data di chiusura prevista
            </div>
          </div>
          <div
            style={{
              fontSize: 11,
              color: theme.tgMeta,
              textAlign: "right",
              marginTop: 6,
            }}
          >
            11:23
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
