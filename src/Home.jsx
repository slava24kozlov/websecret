import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Card from "./Card";
import BrandGroup from "./BrandGroup";
import PriceGroup from "./PriceGroup";
import {useState} from "react";

function Home({products, filters}) {
  const [state, setState] = useState(
    {
      brand: null,
      price: null
    })
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
            <span>Товаров {productsList.length}</span>
          </div>
          <PriceGroup min={Number(filters[0]?.min)}
                      max={Number(filters[0]?.max)}
                      setProductsList={setProductsList}
                      state={state}
                      setState={setState}
          />
          <BrandGroup setProductsList={setProductsList}
                      state={state}
                      setState={setState}
          />
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