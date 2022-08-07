import React, {useRef} from "react";
import styles from "./BrandGroup.module.scss";
import {API_BASE} from "../variables";

const BrandGroup = ({setProductsList}) => {
  const refs = [useRef(), useRef()];
  const handleChange = () => {
    const checkedList = refs.filter(({current: {checked}}) => checked).map(({current: {name}}) => name === "canon" ? "1" : "9")
    fetch(`${API_BASE}${checkedList.length === 1 ? `?brands[]=${checkedList[0]}` : ""}`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
      }).then(data => {
      setProductsList(data.products)
    }).catch(error => console.error(error))
  }
  return (
    <>
      <h2 id="brand" aria-label="сортировка по бренду">Бренд</h2>
      <div className={styles.brandGroup}>
        <input onChange={handleChange}
               ref={refs[0]}
               id="brandCanon"
               aria-describedby="brand"
               name="canon"
               type="checkbox"
        />
        <label htmlFor="brandCanon">Canon</label>
        <input onChange={handleChange}
               ref={refs[1]}
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