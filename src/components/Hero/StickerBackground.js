import React, { useEffect } from "react";
import { json } from "react-router-dom";
import { Sticker } from "./Sticker";
import { useStickerBackground } from "./useStickerBackground";
import styles from "./styles.module.scss";
import * as stickerImages from "../../images/stickers";
import { random } from "../../utils/utils";

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
      <Sticker
        x={0.9}
        y={0.7}
        isVisible={true}
        imageURL={stickerImages.images[1]}
      />
      <Sticker
        x={0.1}
        y={0.2}
        isVisible={true}
        imageURL={stickerImages.images[5]}
      />
      <Sticker
        x={0.8}
        y={0.1}
        isVisible={true}
        imageURL={stickerImages.images[7]}
      />
      <Sticker
        x={0.2}
        y={0.8}
        isVisible={true}
        imageURL={stickerImages.images[2]}
      />
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
