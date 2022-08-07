import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Card from "./Card";
import BrandGroup from "./BrandGroup";
import PriceGroup from "./PriceGroup";
import {useState} from "react";

function Home({products, filters}) {
  const [productsList, setProductsList] = useState(() => products)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated page for the test task "/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.control}>
          <div className={styles.heading}>
            <h1>Камеры</h1>
            <span>Товаров {products.length}</span>
          </div>
          <PriceGroup min={filters[0]?.min} max={filters[0]?.max}/>
          <BrandGroup setProductsList={setProductsList}/>
        </div>
        <div className={styles.content}>
          {productsList.map(({id, image, title, price, is_new, in_stock}) => (
            <Card key={id} image={image} title={title} price={price} isNew={is_new} isStock={in_stock}/>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home;