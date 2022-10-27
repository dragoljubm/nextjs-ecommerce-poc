import styles from "./ProductDisplay.module.css";
import Image from "next/image";

const ProductDisplay = ({ name, price, inStock, about, imageSrc }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} height={400} width={400} alt={name}></Image>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoSection}>
          <h4>Product name</h4>
          <p> {name} </p>
        </div>
        <div className={styles.infoSection}>
          <h4>Price </h4>
          <p> ${price} </p>
        </div>
        <div className={styles.infoSection}>
          <h4>In stock</h4>
          <p> {inStock ? "Yes" : "No"} </p>
        </div>
        <div className={styles.infoSection}>
          <h4>About</h4>
          <p> {about} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
