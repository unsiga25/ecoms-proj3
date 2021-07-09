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
import { API_URL } from '../utils/urls'

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
        <div>
            <Head>
                <title>Your Account</title>
                <meta name="description" content="Your orders will be shown here" />
            </Head>
            <h2>Account Page</h2>
            
            
            <h3>Your Orders</h3>
            {loading && <p>Orders are Loading</p>}
            {orders.map(order => (
                <div key={order.id}>
                    {new Date(order.created_at).toLocaleDateString( 'en-EN' )} {order.product.name} ${order.total} {order.status}
                </div>
            ))}
            <hr />
            <p>Logged in as {user.email}</p>
            <p><a href="#" onClick={logoutUser}>Logout</a></p>
        </div>
    )

}
