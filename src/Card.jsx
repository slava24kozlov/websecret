import React, {useState} from "react";
import styles from "./Card.module.scss";

const Card = ({image, title, price, isNew, isStock}) => {
  const [isActiveLike, setActiveLike] = useState(false);

  const handleChangeLike = () => {
    setActiveLike((like) => !like)
  }
  return (
    <div className={styles.main}>
      {isNew && <div className={styles.newCard}>Новинка</div>}
      <picture>
        <source width="242" height="242" srcSet={image.desktop.webp_x1} type="image/webp" media="(min-width: 768px)"/>
        <source width="124" height="124" srcSet={image.mobile.webp_x1} type="image/webp" media="(max-width: 767px)"/>
        <img width="auto" height="auto" src={image.desktop.webp_x2} alt=""/>
      </picture>
      <div className={styles.content}>
        <p>{title}</p>
        <div>
          <div className={styles.priceRow}>{price}{isNew && <span>Новое</span>}</div>
          <div className={styles.lowerPart}>
            <button>{isStock ? "В корзину" : "Оставить заявку"}</button>
            <button onClick={handleChangeLike}>
              <svg width="20" height="17" viewBox="0 0 20 17" fill={isActiveLike ? "red" : "#fff"} stroke="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.335 9.106h0a4.792 4.792 0 116.828-6.708l.597.667.596-.667a4.792 4.792 0 116.828 6.708l-7.424 6.88-7.425-6.88z"
                  strokeWidth="1.6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;