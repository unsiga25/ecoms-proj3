import Head from "next/head";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { twoDecimals } from "../../utils/format";

const Product = ({ product }) => {
  return (
    <div className="container p-3">
      <Head>
        {product.meta_title && <title>{product.meta_title} | HypeLocker</title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <div className="row">
        <div className="col-12">
          <h5>{product.name}</h5>
          <img src={fromImageToUrl(product.image)} className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 mt-3">
          <p className="text-dark">{product.content}</p>
        </div>
        <div className="col-6 col-lg-3 mt-3">
          <h5>SIZE</h5>
          <h5>QUANTITY</h5>
          <h5 className="text-primary">${twoDecimals(product.price)}</h5>
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();

  return {
    props: {
      product: found[0],
    },
  };
}
export async function getStaticPaths() {
  const products_res = await fetch(`${API_URL}/products/`);
  const products = await products_res.json();

  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false,
  };
}
export default Product;
