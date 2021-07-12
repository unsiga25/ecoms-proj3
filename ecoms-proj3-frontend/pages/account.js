// import Head from "next/head";
// import { useContext } from "react";
// import Link from "next/link";
// import AuthContext from "../context/AuthContext";

// export default function Account() {
//   const { user, logoutUser } = useContext(AuthContext);
//   if (!user) {
//     return (
//       <div className="container">
//         <Link href="/">
//           <btn className="btn btn-primary">Go Back</btn>
//         </Link>
//       </div>
//     );
//   }
//   return (
//     <div className="container">
//       <Head>
//         <title className="text-center">My Account</title>
//         <meta name="description" content="View your account" />
//       </Head>
//       <div className="row">
//         <div className="col-12">
//           <btn href="#" className="btn btn-primary" onClick={logoutUser}>
//             Logout
//           </btn>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useContext, useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'

import AuthContext from "../context/AuthContext";
import { fromImageToUrl,API_URL } from '../utils/urls'

const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true)
            if(user){
                try{
                    const token = await getToken()
                    const orderRes = await fetch(`${API_URL}/orders`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const data = await orderRes.json()
                    setOrders(data)
                } catch(err){
                    setOrders([])
                }
            }
            setLoading(false)
        }

        fetchOrders()
    }, [user])



    return {orders, loading}
}

export default () => {

    const { user, logoutUser, getToken} = useContext(AuthContext)

    const { orders, loading } = useOrders(user, getToken)
    
    if(!user){
        return (
            <div>
                <p>Please Login or Register before accessing this page</p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        )
    }

    return (
        <div className="container account-box">
        <div className="row">
            <div className="col">
            <Head>
                <title>Your Account</title>
                <meta name="description" content="Your orders will be shown here" />
            </Head >
            <div className="account_header d-flex align-items-center justify-content-center mb-5">
            <h2 className="account-title me-auto ">Account Page</h2>
            
            <a href="#" onClick={logoutUser} className="logout text-decoration-none text-dark mb-0">Logout</a>
            </div>  
            
            <h3 className="mb-3">Your Orders</h3>
            {loading && <p>Orders are Loading</p>}
            {orders.map(order => (
                <div className="col-12 mb-3 d-flex align-items-center account-product-title" key={order.id}>
                     <img
                  src={fromImageToUrl(order.product.image)}
                  width={100}
                  height={100}
                  className="order_img img-fluid"
                />
                    <div className="me-3">
                    <h4 className="product_name mb-1">{order.product.name} </h4>
                    <div className="order_sub_content">QTY: {order.quantity} Size: {order.size}</div>
                    <div className="order_sub_content d-flex"><p className="mb-0 me-3">${order.total}  <span>{order.Status}</span></p> </div>
                    </div>
                   
                </div>
            ))}
            <hr />
            <p >Logged in as {user.email}</p>
           
            
        </div>
        </div>
        </div>
    )

}
