import React from "react";
import styles from "../styles/Home.module.scss";

const PriceGroup = ({min, max, state, setState}) => {
  const handleChange = (event) => {
    const {target: {name, value}} = event
    if (value >= min && value <= max) {
      if (name === "min value") {
        if (value <= state.maxPrice) {
          setState(prevState => ({
            ...prevState,
            start: true,
            minPrice: value
          }))
        }
      } else {
        if (value >= state.minPrice) {
          setState(prevState => ({
            ...prevState,
            start: true,
            maxPrice: value
          }))
        }
      }
    }
  }

  return (
    <>
      <h2 id="price" aria-label="сортировка по цене">Цена, ₽</h2>
      <div className={styles.pricesGroup}>
        <input aria-labelledby="price"
               onChange={handleChange}
               name="min value"
               type="number"
               min={min}
               max={max}
               value={state.minPrice}
        />
        <input aria-labelledby="price"
               onChange={handleChange}
               name="max value"
               type="number"
               min={min}
               max={max}
               value={state.maxPrice}
        />
      </div>
    </>
  )
}

export default PriceGroup