import { FC } from "react";
import { Slide } from "react-slideshow-image";

import styles from "./ProductSlideshow.module.css";

interface Props {
  images: string[];
  children?: React.ReactNode;
}

export const ProductSlideshow: FC<Props> = ({ images }) => {
  return (
    <Slide easing="ease" duration={700} indicators>
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          <div className={styles.each_slide } key={image}>
            <div style={{'backgroundImage': `url(${ url })`, backgroundSize: 'cover'}}>
                {/* <img src={url} alt={image} /> */}
              </div>
          </div>
        );
      })}
    </Slide>
  );
};
