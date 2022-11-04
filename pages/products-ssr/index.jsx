import Head from "next/head";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import styles from "./SSRPage.module.css";

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.DB_HOST}/products`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

const SSRPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSR</title>
      </Head>
      <h1>Server Side Rendering</h1>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <Link key={product.id} href={`/products-ssr/${product.id}`}>
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SSRPage;
