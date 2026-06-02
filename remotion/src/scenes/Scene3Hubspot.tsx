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

const Row: React.FC<{
  label: string;
  value: string;
  appearAt: number;
  highlight?: boolean;
}> = ({ label, value, appearAt, highlight }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - appearAt, fps, config: { damping: 18 } });
  return (
    <div style={{ marginBottom: 14, opacity: s }}>
      <div
        style={{
          fontSize: 12,
          color: theme.hsTextDim,
          marginBottom: 3,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 16,
          fontWeight: highlight ? 700 : 500,
          color: highlight ? "#3F6212" : theme.hsText,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {value}
        {highlight && (
          <span
            style={{
              fontSize: 12,
              color: "#3F6212",
              background: "rgba(163,230,53,0.25)",
              borderRadius: 6,
              padding: "1px 6px",
              fontWeight: 700,
            }}
          >
            AI
          </span>
        )}
      </div>
    </div>
  );
};

export const Scene3Hubspot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Amount counts up to 7.000.
  const amount = Math.round(
    interpolate(frame, [42, 66], [0, 7000], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) / 100
  ) * 100;

  // Saved confirmation toast.
  const savedIn = spring({ frame: frame - 78, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ background: theme.hsBg, fontFamily: UI_FONT }}>
      {/* Top bar */}
      <div
        style={{
          height: 56,
          background: theme.hsCard,
          borderBottom: `1px solid ${theme.hsBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          color: theme.hsText,
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        <span>‹ Trattative</span>
        <span style={{ color: theme.hsLink }}>Azioni ▾</span>
      </div>

      {/* Card */}
      <div style={{ padding: 16 }}>
        <div
          style={{
            background: theme.hsCard,
            border: `1px solid ${theme.hsBorder}`,
            borderRadius: 12,
            padding: 18,
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: theme.hsOrange,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              ⛁
            </div>
            <div
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: theme.hsText,
                lineHeight: 1.25,
              }}
            >
              Fornitura Materiale Consumabile – Auto Torino
            </div>
          </div>

          <Row label="Nome trattativa" value="Fornitura Materiale Consumabile – Auto Torino" appearAt={6} highlight />
          <Row label="Cliente" value="Auto Torino" appearAt={18} />
          <Row label="Importo" value={`${amount.toLocaleString("it-IT")},00 €`} appearAt={36} />
          <Row label="Data di chiusura" value="13/06/2026" appearAt={54} />
          <Row label="Pipeline" value="Pipeline delle vendite" appearAt={62} />
          <Row label="Fase trattativa" value="1 — Primo Contatto" appearAt={68} />
        </div>
      </div>

      {/* Saved-in-CRM confirmation */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 28,
          display: "flex",
          justifyContent: "center",
          opacity: savedIn,
          transform: `translateY(${(1 - savedIn) * 14}px)`,
        }}
      >
        <div
          style={{
            background: theme.lime400,
            color: theme.sky950,
            fontWeight: 800,
            fontSize: 15,
            padding: "11px 20px",
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 8px 24px rgba(132,204,22,0.4)",
          }}
        >
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: theme.sky950,
              color: theme.lime400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
            }}
          >
            ✓
          </span>
          Lead salvato nel CRM
        </div>
      </div>
    </AbsoluteFill>
  );
};
