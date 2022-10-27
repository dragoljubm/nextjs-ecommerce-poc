import styles from "./Layout.module.css";
import Navigation from "./Navigation";
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default Layout;
