import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Card from "./Card";

function Home({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated page for the test task "/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.control}>
          <span>Товаров {products.length}</span>
          <h1>Камеры</h1>
          <h2 id="price" aria-label="сортировка по цене">Цена, ₽</h2>
          <div className={styles.pricesGroup}>
            <input aria-labelledby="price" name="min value" type="number" min="0" value="0"/>
            <input aria-labelledby="price" name="max value" type="number" max="499" value="999"/>
          </div>
          <h2 id="brand" aria-label="сортировка по бренду">Бренд</h2>
          <div className={styles.brandGroup}>
            <input id="brandCanon" aria-describedby="brand" name="canon" type="checkbox"/>
            <label htmlFor="brandCanon">Canon</label>
            <input id="brandNikon" aria-describedby="brand" name="canon" type="checkbox"/>
            <label htmlFor="brandNikon">Nikon</label>
          </div>
        </div>
        <div className={styles.content}>
          {products.map(({id, image, title, price, is_new}) => (
            <Card key={id} image={image} title={title} price={price} isNew={is_new}/>
          ))}
        </div>
      </main>

      {/*<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
        </a>
      </footer>*/}
    </div>
  )
}

export default Home;