import React from "react";
import styles from "./Card.module.scss";

const Card = ({image, title, price, isNew}) => (
  <div className={styles.main}>
    {isNew && <div className={styles.newCard}>Новинка</div>}
    <picture>
      <source width="242" height="242" srcSet={image.desktop.webp_x1} type="image/webp" media="(min-width: 768px)"/>
      <source width="171" height="171" srcSet={image.mobile.webp_x1} type="image/webp" media="(max-width: 767px)"/>
      <img width="auto" height="auto" src={image.desktop.webp_x2} alt=""/>
    </picture>
    <div className={styles.content}>
      <p>{title}</p>
      <div>
        <div className={styles.priceRow}>{price}{isNew && <span>Новое</span>}</div>
        <button>В корзину</button>
      </div>
    </div>
  </div>
);

export default Card;