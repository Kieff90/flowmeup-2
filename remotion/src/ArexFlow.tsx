import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadArchivo } from "@remotion/google-fonts/Archivo";
import { loadFont as loadSource } from "@remotion/google-fonts/SourceSans3";
import { PhoneFrame } from "./components/PhoneFrame";
import { Scene1Telegram } from "./scenes/Scene1Telegram";
import { Scene2Telegram } from "./scenes/Scene2Telegram";
import { Scene3Hubspot } from "./scenes/Scene3Hubspot";
import {
  SCENE1_FRAMES,
  SCENE2_FRAMES,
  SCENE3_FRAMES,
  TOTAL_FRAMES,
  TAIL_FRAMES,
  theme,
} from "./theme";

const heading = loadArchivo().fontFamily;
const sans = loadSource().fontFamily;

const STEPS = [
  { n: 1, label: "Registra con un vocale" },
  { n: 2, label: "L'AI completa i dati" },
  { n: 3, label: "Lead salvato nel CRM" },
];

const StepRail: React.FC<{ active: number }> = ({ active }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
      {STEPS.map((s, i) => {
        const isActive = i === active;
        const isDone = i < active;
        return (
          <div
            key={s.n}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              opacity: isActive ? 1 : isDone ? 0.55 : 0.32,
              transition: "opacity 0.3s",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: isActive ? theme.lime400 : "transparent",
                border: isActive
                  ? "none"
                  : `2px solid ${theme.textOnDarkDim}`,
                color: isActive ? theme.sky950 : theme.textOnDark,
                fontFamily: heading,
                fontWeight: 800,
                fontSize: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: isActive
                  ? `0 0 32px rgba(163,230,53,0.5)`
                  : "none",
              }}
            >
              {isDone ? "✓" : s.n}
            </div>
            <span
              style={{
                fontFamily: heading,
                fontWeight: isActive ? 800 : 600,
                fontSize: 34,
                color: isActive ? theme.white : theme.textOnDarkDim,
                lineHeight: 1.1,
              }}
            >
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const ArexFlow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Seamless loop: crossfade the stage at the tail back to the head.
  const loopFade = interpolate(
    frame,
    [TOTAL_FRAMES - TAIL_FRAMES, TOTAL_FRAMES - 1],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const introFade = interpolate(frame, [0, TAIL_FRAMES], [0, 1], {
    extrapolateRight: "clamp",
  });
  const stageOpacity = Math.min(loopFade, introFade);

  let active = 0;
  if (frame >= SCENE1_FRAMES) active = 1;
  if (frame >= SCENE1_FRAMES + SCENE2_FRAMES) active = 2;

  const phoneIn = spring({ frame, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill style={{ background: theme.sky950, opacity: stageOpacity }}>
      {/* lime brand glow */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "radial-gradient(circle at 22% 28%, rgba(163,230,53,0.16), transparent 52%)",
        }}
      />

      <AbsoluteFill
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Left storytelling rail */}
        <div
          style={{
            flex: 1,
            paddingLeft: 130,
            paddingRight: 40,
            display: "flex",
            flexDirection: "column",
            gap: 56,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: heading,
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: "0.22em",
                color: theme.lime400,
                marginBottom: 18,
              }}
            >
              DAL VOCALE AL CRM · IN AUTOMATICO
            </div>
            <div
              style={{
                fontFamily: heading,
                fontWeight: 900,
                fontSize: 56,
                color: theme.white,
                lineHeight: 1.04,
                letterSpacing: "-0.01em",
              }}
            >
              Parli.
              <br />
              <span style={{ color: theme.lime400 }}>FlowMeUp</span> registra il
              lead.
            </div>
          </div>
          <StepRail active={active} />
        </div>

        {/* Phone */}
        <div
          style={{
            width: 720,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 90,
            transform: `translateY(${(1 - phoneIn) * 30}px)`,
            opacity: phoneIn,
          }}
        >
          <PhoneFrame>
            <Sequence durationInFrames={SCENE1_FRAMES}>
              <Scene1Telegram />
            </Sequence>
            <Sequence from={SCENE1_FRAMES} durationInFrames={SCENE2_FRAMES}>
              <Scene2Telegram />
            </Sequence>
            <Sequence
              from={SCENE1_FRAMES + SCENE2_FRAMES}
              durationInFrames={SCENE3_FRAMES + TAIL_FRAMES}
            >
              <Scene3Hubspot />
            </Sequence>
          </PhoneFrame>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
