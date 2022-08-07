import React from "react";
import styles from "./BrandGroup.module.scss";

const BrandGroup = ({setState}) => {
  const handleChange = (event) => {
    const {target: {name, checked}} = event;
    if (name === "canon") {
      setState(prevState => ({
        ...prevState,
        start: true,
        canon: checked
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        start: true,
        nikon: checked
      }))
    }
  }
  return (
    <>
      <h2 id="brand" aria-label="сортировка по бренду">Бренд</h2>
      <div className={styles.brandGroup}>
        <input onChange={handleChange}
               id="brandCanon"
               aria-describedby="brand"
               name="canon"
               type="checkbox"
        />
        <label htmlFor="brandCanon">Canon</label>
        <input onChange={handleChange}
               id="brandNikon"
               aria-describedby="brand"
               name="nikon"
               type="checkbox"
        />
        <label htmlFor="brandNikon">Nikon</label>
      </div>
    </>
  )
}

export default BrandGroup;