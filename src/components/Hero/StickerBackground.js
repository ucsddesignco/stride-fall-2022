import React, { useEffect } from "react";
import { json } from "react-router-dom";
import { Sticker } from "./Sticker";
import { useStickerBackground } from "./useStickerBackground";
import styles from "./styles.module.scss";
import * as stickerImages from "../../images/stickers";

const StickerBackground = () => {
  const stickerBackground = useStickerBackground();

  useEffect(() => {
    stickerImages.images.map((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <div
      ref={stickerBackground.ref}
      className={styles.stickerBackground}
      onMouseMove={stickerBackground.handleMouseMove}
      onMouseDown={stickerBackground.handleMouseDown}
      onMouseLeave={stickerBackground.handleMouseLeave}
    >
      {/* <Sticker
        x={0.5}
        y={0.5}
        isVisible={sticker.isVisible}
        imageURL={stickerImages.images[sticker.number]}
      /> */}
      {stickerBackground.stickers.map((sticker, index) => (
        <Sticker
          x={sticker.x}
          y={sticker.y}
          isVisible={sticker.isVisible}
          imageURL={stickerImages.images[sticker.number]}
        />
      ))}
    </div>
  );
};

export default StickerBackground;
