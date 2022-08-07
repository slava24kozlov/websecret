import React, {useState} from "react";
import styles from "../styles/Home.module.scss";
import {API_BASE} from "../variables";

const PriceGroup = ({min = 1, max = 9999, setProductsList, state, setState}) => {
  const [priceMin, setPriceMin] = useState(min)
  const [priceMax, setPriceMax] = useState(max)

  const requestPrice = (min, max) => {
    const brand = state.brand.length === 1 ? `&brands[]=${state.brand[0]}` : ""
    fetch(`${API_BASE}?price[min]=${min}&price[max]=${max}${brand}`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
      }).then(data => {
      setProductsList(data.products)
    }).catch(error => console.error(error))
  }

  const handleChange = (event) => {
    const {target: {name, value}} = event
    if (value >= min && value <= max) {
      if (name === "min value") {
        if (value <= priceMax) {
          requestPrice(value, priceMax)
          setState(prevState => ({
            ...prevState,
            price: {
              minimum: value,
              maximum: priceMax
            }
          }))
          setPriceMin(value)
        }
      }
      if (name === "max value") {
        if (value >= priceMin) {
          requestPrice(priceMin, value)
          setState(prevState => ({
            ...prevState,
            price: {
              minimum: priceMin,
              maximum: value
            }
          }))
          setPriceMax(value)
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