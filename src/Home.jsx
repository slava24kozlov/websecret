import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Card from "./Card";
import BrandGroup from "./BrandGroup";
import PriceGroup from "./PriceGroup";
import {useEffect, useState} from "react";
import {API_BASE} from "../variables";
import {useDebounce} from "../hook/useDebounce";

function Home({products, filters}) {
  const min = Number(filters[0]?.min) || 1
  const max = Number(filters[0]?.max) || 99999

  const [state, setState] = useState(
    {
      start: false,
      canon: false,
      nikon: false,
      minPrice: min,
      maxPrice: max
    })

  const [productsList, setProductsList] = useState(() => products)

  const requestAPI = () => {
    const nikon = state.nikon ? "&brands[]=9" : "";
    const canon = state.canon ? "&brands[]=1" : "";
    const minPrice = state.minPrice > min ? `&price[min]=${state.minPrice}` : "";
    const maxPrice = state.maxPrice < max ? `&price[max]=${state.maxPrice}` : "";
    fetch(`${API_BASE}?${minPrice}${maxPrice}${nikon}${canon}`).then(res => {
      if (res.status === 200) {
        return res.json()
      }
    }).then(data => {
      setProductsList(data.products)
    }).catch(error => console.error(error))
  }

  const stateDebounced = useDebounce(state, 1000)

  useEffect(() => {
    stateDebounced.start && requestAPI()
  }, [stateDebounced])

  return (
    <div className={styles.container}>
      <Head>
        <title>Web Secret App</title>
        <meta name="description" content="Generated page for the test task "/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.control}>
          <div className={styles.heading}>
            <h1>Камеры</h1>
            <span>Товаров {productsList.length}</span>
          </div>
          <PriceGroup min={min}
                      max={max}
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