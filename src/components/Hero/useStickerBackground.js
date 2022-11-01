import { useEffect, useRef } from "react";
import { useImmer } from "use-immer";
import { last, random } from "../../utils/utils";

export const useStickerBackground = () => {
  const ref = useRef();
  const [stickers, setStickers] = useImmer([
    { x: 0, y: 0, isVisible: false, number: 0 },
  ]);

  const handleMouseMove = (e) => {
    setStickers((draft) => {
      const currentSticker = last(draft);
      currentSticker.x =
        (e.clientX - ref.current.getBoundingClientRect().x) /
        ref.current.offsetWidth;
      currentSticker.y =
        (e.clientY - ref.current.getBoundingClientRect().y) /
        ref.current.offsetHeight;
      currentSticker.isVisible = true;
    });
  };

  const handleMouseDown = () => {
    setStickers((draft) => {
      const currentSticker = last(draft);
      draft.push({
        x: currentSticker.x,
        y: currentSticker.y,
        isVisible: true,
        number: random(1, 14),
      });
    });
  };

  const handleMouseLeave = () => {
    setStickers((draft) => {
      const currentSticker = last(draft);
      currentSticker.isVisible = false;
    });
  };

  return {
    handleMouseMove,
    handleMouseDown,
    handleMouseLeave,
    ref,
    stickers,
  };
};
