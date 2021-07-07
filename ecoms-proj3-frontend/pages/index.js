import Head from 'next/head'
import Link from 'next/link'
import products from '../products.json'
import { fromImageToUrl } from '../utils/urls'

export default function Home() {
  return (
    <div className="container p-3">
      <Head>
        <title>HypeLocker</title>
      </Head>
      <div className="row">
      {products.map(product => (
          <div key={product.name} className="col-12 col-md-6 col-lg-4 col-xl-3 justify-content-center">
            <Link href={`/products/${product.slug}`}>
            <a className="text-decoration-none">
              <img
              src={fromImageToUrl(product.image)}
              width={500}
              height={500}
              className="img-fluid"
              />
              <h5 className="mt-2 text-center text-dark">{product.name}</h5>
              <p className="text-primary text-center">P{product.price}</p>
            </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
