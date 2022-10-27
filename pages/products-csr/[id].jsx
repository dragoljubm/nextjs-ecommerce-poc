import { useEffect, useState } from "react";
import ProductDisplay from "../../components/ProductDisplay";
import { useRouter } from "next/router";

const ProductV3 = () => {
  const {
    // Gets the query "id" based on dynamic page routing (since the page is called [id.jsx])
    // https://nextjs.org/docs/routing/dynamic-routes
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductData() {
      const res = await fetch(`${process.env.DB_HOST}/products/${id}`);
      setProduct(await res.json());
    }
    if (id) {
      fetchProductData();
    }
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <ProductDisplay
      name={product.name}
      price={product.price}
      about={product.about}
      imageSrc={product.imageSrc}
      inStock={product.inStock}
    />
  );
};

export default ProductV3;
