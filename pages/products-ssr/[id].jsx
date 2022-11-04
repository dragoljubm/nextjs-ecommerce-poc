import ProductDisplay from "../../components/ProductDisplay";

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.DB_HOST}/products/${params.id}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}

const ProductV2 = ({ product }) => {
  return <ProductDisplay product={product} />;
};

export default ProductV2;
