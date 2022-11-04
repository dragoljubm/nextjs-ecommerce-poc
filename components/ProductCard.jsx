import Image from "next/image";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <Image
        src={product.imageSrc}
        height={150}
        width={150}
        alt={product.name}
      />
      <div className={styles.productInfo}>
        <p> {product.name}</p>
        <p> ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
