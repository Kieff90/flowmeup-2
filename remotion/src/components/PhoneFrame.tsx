import React from "react";

// A clean, neutral phone frame. Screen children are clipped to the rounded
// inner area. Dimensions tuned for a 1080x1080 stage.
export const PHONE_W = 430;
export const PHONE_H = 900;
const BEZEL = 12;
const RADIUS = 56;

export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: RADIUS,
        background: "#0B0B0F",
        padding: BEZEL,
        boxShadow:
          "0 40px 90px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.35)",
        position: "relative",
      }}
    >
      {/* Screen */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: RADIUS - BEZEL,
          overflow: "hidden",
          position: "relative",
          background: "#fff",
        }}
      >
        {children}
        {/* Notch / dynamic island */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 110,
            height: 30,
            borderRadius: 18,
            background: "#0B0B0F",
            zIndex: 50,
          }}
        />
      </div>
    </div>
  );
};
