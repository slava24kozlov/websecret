import Home from "../src/Home";

export default function HomePage({products, filters}) {
  return <Home products={products} filters={filters}/>
};

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL);
  const {products, filters} = await res.json();
  return {
    props: {products, filters},
  }
}
