import Head from "next/head";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
// import styles from "../styles/Login.module.css";

export default function Login() {
  const [input, setInput] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(input);
  };

  return (
   
      
        <div className=" w-50 login_box m-auto p-5" >
          <Head>
            <title className="text-center">Login</title>
            <meta
              name="description"
              content="Login here to be able to purchase"
            />
          </Head>

          <h2 className="text-center mb-1">Login</h2>
          <p className="form-text  text-center mb-5">
            Powered by Magic.link
          </p>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label
              for="exampleFormControlInput1"
              className="form-label "
            >
              Email address
            </label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="email"
              placeholder="name@example.com"
              className="mb-5 pt-1 pb-1 border-dark"
              id="exampleFormControlInput1"
            />
            <button type="submit" className="btn btn-dark mb-5">
              Log In
            </button>
          </form>
        </div>
     
  );
}
