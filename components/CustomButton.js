"use client";

import { useSnapshot } from "valtio";
import state from "../store";

import { getContrastingColor } from "../config/helpers";

export default function CustomButton({
  title,
  type,
  customStyles,
  handleClick,
}) {
  const snap = useSnapshot(state);

  const generateStyle = () => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return { borderWidth: "1px", borderColor: snap.color, color: snap.color };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-auto rounded-md ${customStyles}`}
      style={generateStyle()}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
