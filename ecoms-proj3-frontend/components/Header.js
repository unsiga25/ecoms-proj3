import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  const { user } = useContext(AuthContext);
  return (
    <div>
       
      <nav className="navbar navbar-expand-lg navbar-dark bg-main">
        <div className="container">
          <a className="navbar-brand" href="#">
           HypeLocker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
                </Link>         
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jordans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Yeezys
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Basketball
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <div>
              {user ? (
                <Link href="/account">
                  <a><img src="/user-icon.png" alt={user.email} className="icon"/></a>
                </Link>
              ) : (
                <Link href="/login">
                  <btn className="btn btn-primary">Login</btn>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="container">
        {!isHome && (
          <a href="#" onClick={goBack}>
            {"<"}Back
          </a>
        )}
      </div> */}
    </div>
  );
};

export default Header;
