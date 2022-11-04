import styles from "./ProductDisplay.module.css";
import Image from "next/image";

const ProductDisplay = ({ product }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={product.imageSrc}
          height={400}
          width={400}
          alt={product.name}
        ></Image>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoSection}>
          <h4>Product name</h4>
          <p> {product.name} </p>
        </div>
        <div className={styles.infoSection}>
          <h4>Price </h4>
          <p> ${product.price} </p>
        </div>
        <div className={styles.infoSection}>
          <h4>In stock</h4>
          <p> {product.inStock ? "Yes" : "No"} </p>
        </div>
        <div className={styles.infoSection}>
          <h4>About</h4>
          <p> {product.about} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
