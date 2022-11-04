import Head from "next/head";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import styles from "./SSGPage.module.css";

export async function getStaticProps() {
  const res = await fetch(`${process.env.DB_HOST}/products/`);
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 120,
  };
}

const SSGPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSG</title>
      </Head>
      <h1>Static Site Generation</h1>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <Link key={product.id} href={`/products-ssg/${product.id}`}>
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SSGPage;
