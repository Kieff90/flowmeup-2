import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// VP9/WebM transparency not needed; keep simple opaque output for web loop.
Config.setCodec("h264");
