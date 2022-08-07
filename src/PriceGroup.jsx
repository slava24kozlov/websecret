import React from "react";
import styles from "../styles/Home.module.scss";

const PriceGroup = ({min = 1, max = 999}) => {
  return (
    <>
      <h2 id="price" aria-label="сортировка по цене">Цена, ₽</h2>
      <div className={styles.pricesGroup}>
        <input aria-labelledby="price"
               name="min value"
               type="number"
               min={min}
               max={max}
        />
        <input aria-labelledby="price"
               name="max value"
               type="number"
               min={min}
               max={max}/>
      </div>
    </>
  )
}

export default PriceGroup