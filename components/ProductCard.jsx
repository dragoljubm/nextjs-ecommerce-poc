import Image from "next/image";
import styles from "./ProductCard.module.css";

const ProductCard = ({ name, price, imageSrc }) => {
  return (
    <div className={styles.container}>
      <Image src={imageSrc} height={150} width={150} alt={name} />
      <div className={styles.productInfo}>
        <p> {name}</p>
        <p> ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
