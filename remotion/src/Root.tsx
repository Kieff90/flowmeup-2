import { Composition } from "remotion";
import { ArexFlow } from "./ArexFlow";
import { FPS, TOTAL_FRAMES, VIDEO_W, VIDEO_H } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ArexFlow"
      component={ArexFlow}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={VIDEO_W}
      height={VIDEO_H}
    />
  );
};
