import Head from "next/head";
import Link from "next/link";
// import products from '../products.json'
import { fromImageToUrl, API_URL } from "../utils/urls";
import { twoDecimals } from "../utils/format";

export default function Home({products}) {
  return (
    <>
    <img src="/banner.jpg" alt="banner" className="banner w-100 mb-5 img-fluid"/>
    <div className="container p-3">
      <Head>
        <title>HypeLocker</title>
      </Head>
      <div className="row">
      
        {products.map((product) => (
          <div
            key={product.name}
            className="col-12 col-md-6 col-lg-4 col-xl-3 product-card"
          >
            <Link href={`/products/${product.slug}`}>
              <a className="text-decoration-none d-flex flex-column">
                <img
                  src={fromImageToUrl(product.image)}
                  width={500}
                  height={500}
                  className="img-fluid"
                />
                <div className="d-flex flex-column p-3 position-relative">
                  <h5 className="mt-2 text-center text-dark line-height-product">
                    {product.name}
                  </h5>
                  <p className="text-primary text-center position-absolute product-price start-50 translate-middle">
                    ${twoDecimals(product.price)}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export async function getStaticProps(){
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

  return{
    props: {
      products
    }
  }
}