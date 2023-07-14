import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

export default function ColorPicker() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#c085dc",
          "#ffab91",
          "#1a3755",
          "#ffe5a1",
          "#80f5f3",
          "#43542f",
          "#f5adb6",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
}
