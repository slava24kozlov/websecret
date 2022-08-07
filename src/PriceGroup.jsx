import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.scss";
import {API_BASE} from "../variables";

const PriceGroup = ({min = 1, max = 99999}) => {
  const [priceMin, setPriceMin] = useState(min)
  const [priceMax, setPriceMax] = useState(max)

  const handleChange = (event) => {
    const {target: {name, value}} = event
    if (value >= min && value <= max) {
      name === "min value" && setPriceMin(value)
      name === "max value" && setPriceMax(value)
    }
  }

 /* useEffect(() => {
    console.log("useEffect")
    fetch(`${API_BASE}?price[min]=${priceMin}&price[max]=${priceMax}`).then(res => {
      if (res.status === 200) {
        return res.json()
      }
    }).then(data => {
      setProductsList(data.products)
    }).catch(error => console.error(error))
  }, [priceMin, priceMax])*/

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
               value={priceMin}
        />
        <input aria-labelledby="price"
               onChange={handleChange}
               name="max value"
               type="number"
               min={min}
               max={max}
               value={priceMax}
        />
      </div>
    </>
  )
}

export default PriceGroup