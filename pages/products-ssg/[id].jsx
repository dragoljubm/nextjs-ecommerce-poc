import ProductDisplay from "../../components/ProductDisplay";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.DB_HOST}/products`);
  const paths = (await res.json()).map((product) => {
    return { params: { id: encodeURI(product.id) } };
  });
  return {
    paths,
    /* 
    blocking fallback value causes the browser to "hang" and wait for the server to render
    the page if it wasn't already created during build time.
    true fallback value works similarly, but provides the option to serve the user a dummy
    page while waiting for the actual page to be rendered
    https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
    https://stackoverflow.com/questions/67787456/what-is-the-difference-between-fallback-false-vs-true-vs-blocking-of-getstaticpa
    */
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.DB_HOST}/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
    /*
      Tells Next.js to serve the cached version of the page for at least 120 seconds,
      if a user visits the page after 120 seconds have passed and the data has changed,
      the user gets served the cached version (with old data) but Next.js builds
      the page again (regenerates it) so that subsequent visits will provide the up-to-date
      version of the page
      https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    */
    revalidate: 120,
  };
}

const ProductV1 = ({ product }) => {
  return <ProductDisplay product={product} />;
};

export default ProductV1;
