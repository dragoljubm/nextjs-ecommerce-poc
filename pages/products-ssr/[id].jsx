import ProductDisplay from "../../components/ProductDisplay";

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.DB_HOST}/products/${params.id}`);
  const productData = await res.json();
  return {
    props: {
      productData,
    },
  };
}

const ProductV2 = ({ productData }) => {
  return (
    <ProductDisplay
      name={productData.name}
      price={productData.price}
      about={productData.about}
      imageSrc={productData.imageSrc}
      inStock={productData.inStock}
    />
  );
};

export default ProductV2;
