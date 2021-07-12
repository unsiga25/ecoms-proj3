import Head from "next/head";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { twoDecimals } from "../../utils/format";

const Product = ({ product }) => {
  return (
    <div className="container product-full-description p-3 d-flex justify-content-center align-items-center">
      <Head>
        {product.meta_title && <title>{product.meta_title} | HypeLocker</title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <div className="row">
      
        <div className="col-12 col-lg-6 d-flex flex-column">
          
          <img src={fromImageToUrl(product.image)}
           className="w-100" />

        </div>
        <div className="col-12 col-lg-6 ">
          <h5>{product.name}</h5>
          <p className="text-dark mt-3 mb-5">{product.content}</p>
          <div className="d-flex justify-content-between align-items-center mb-3 pe-lg-5 ">
            <span>Size</span>
              <select className="form-select w-50" aria-label="Default select example">
              <option selected>Size</option>
              <option value="1">7.0</option>
              <option value="1">7.5</option>
              <option value="1">8.0</option>
              <option value="1">8.5</option>
              <option value="2">9.0</option>
              <option value="2">9.5</option>
              <option value="3">10.0</option>
            </select>
          </div>
            <div className="d-flex justify-content-between align-items-center mb-3 pe-lg-5 ">
              <span>Quantity</span>
              <input type="number" className="form-control w-50" id="input1" placeholder="Enter Quantity"></input>
            </div>
          
            <div className="d-flex w-100 justify-content-between align-items-center pe-lg-5 ">
              <h5 className="text-primary mb-0">${twoDecimals(product.price)}</h5>
              <button type="button" className="btn btn-primary w-50 text-uppercase">Add to Cart</button>
            </div>
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
