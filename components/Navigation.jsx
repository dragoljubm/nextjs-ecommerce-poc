import Link from "next/link";
import styles from "./Navigation.module.css";
import { useRouter } from "next/dist/client/router";

const links = [
  {
    name: "CSR",
    slug: "/products-csr",
  },
  {
    name: "SSR",
    slug: "/products-ssr",
  },
  {
    name: "SSG",
    slug: "/products-ssg",
  },
];

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navbar}>
      {links.map((link) => {
        return (
          <Link key={link.slug} href={link.slug}>
            <a
              className={pathname.includes(link.slug) ? styles.activeLink : ""}
            >
              {link.name}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
