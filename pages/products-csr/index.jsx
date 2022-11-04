import Head from "next/head";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./CSRPage.module.css";

const CSRPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`http://localhost:4000/products`);
      setProducts(await res.json());
    }
    fetchProducts();
  }, []);

  if (!products) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>CSR</title>
      </Head>
      <h1>Client Side Rendering</h1>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <Link key={product.id} href={`/products-csr/${product.id}`}>
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CSRPage;
