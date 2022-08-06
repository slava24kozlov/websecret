import Home from "../src/Home";

export default function HomePage({products}) {
  return <Home products={products}/>
};

export async function getStaticProps() {
  const res = await fetch("https://getlens-master.stage.dev.family/api/pages/obektivy");
  const {products} = await res.json();
  return {
    props: {products},
  }
}
