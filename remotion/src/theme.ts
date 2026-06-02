// FlowMeUp design tokens — mirror of the LIVE site (globals.css + components),
// not the stale DESIGN.md. Dark = sky-950, accent = lime, fonts Archivo/Source Sans 3.
export const theme = {
  sky950: "#082F49", // dark background (bg-sky-950)
  sky900: "#0C4A6E",
  sky100: "#E0F2FE",
  lime400: "#A3E635", // primary accent (bg-lime-400)
  lime300: "#BEF264",
  lime500: "#84CC16",
  white: "#FFFFFF",
  textOnDark: "#FFFFFF",
  textOnDarkDim: "#9DB6C4",
  gold: "#F2B705", // semantic --color-accent (secondary)
  green500: "#22C55E",
  slate100: "#F1F5F9",
  slate600: "#475569",
  // Telegram-style chat tokens (recreated look, no original assets)
  tgBg: "#C9E6C2",
  tgHeader: "#4A9D6E",
  tgBubbleIn: "#FFFFFF",
  tgBubbleOut: "#E5FFD6",
  tgText: "#1A2B33",
  tgMeta: "#7A9B86",
  tgBlue: "#2F8FED",
  // HubSpot-style tokens (recreated)
  hsBg: "#F5F8FA",
  hsCard: "#FFFFFF",
  hsBorder: "#DFE3EB",
  hsText: "#33475B",
  hsTextDim: "#7C98B6",
  hsOrange: "#FF7A59",
  hsLink: "#0091AE",
} as const;

// Single composition timing (30fps).
export const FPS = 30;
export const SCENE1_FRAMES = 90; // 3.0s — Telegram voice recording
export const SCENE2_FRAMES = 120; // 4.0s — bot reply, missing fields
export const SCENE3_FRAMES = 105; // 3.5s — HubSpot deal populated
export const TAIL_FRAMES = 15; // 0.5s — fade into loop start
export const TOTAL_FRAMES =
  SCENE1_FRAMES + SCENE2_FRAMES + SCENE3_FRAMES + TAIL_FRAMES;

// Composition is 16:9 to fit the site's VideoLoop slot (object-cover).
export const VIDEO_W = 1920;
export const VIDEO_H = 1080;
