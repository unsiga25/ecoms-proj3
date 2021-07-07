import products from '../../products.json'
import Head from 'next/head'
import { fromImageToUrl } from '../../utils/urls';
const product = products[0];

const Product = () => {
    return (
        <div className="container p-3">
            <Head>
                {product.meta_title && 
                <title>{product.meta_title} | HypeLocker</title>
                }
                {product.meta_description && 
                <meta name="description" content={product.meta_description} />
                }
            </Head>
            <div className="row">
                <div className="col-12">
                    <h5>{product.name}</h5>
                    <img 
                    src={fromImageToUrl(product.image)}
                    className="img-fluid"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <p className="text-dark">{product.content}</p>
                </div>
                <div className="col-6 col-lg-3">
                    <h5>COLOR</h5>
                    <h5>SIZE</h5>
                    <h5>QUANTITY</h5>
                    <h5 className="text-primary">P{product.price}</h5>
                </div>
            </div>
        </div>
    )
}

export default Product
