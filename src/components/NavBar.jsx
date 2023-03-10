import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function NavBar({ token, flag, setToken}) {
  const [logout, setLogout] = useState(1);

  function handleLogout() {
    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/logout",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log("Izloguj se!");

        window.sessionStorage.setItem("auth_token", null);
      })
      .catch(function (error) {
        console.log("Usao u gresku!");
        if (error.response.status === 401) {
          console.log("Usao u if 401");
          window.sessionStorage.setItem("auth_token", null);
          setToken(null);
        }
      });
  }

  if (flag !== undefined) {
    return (
      <div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Welcome
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarBasic"
              aria-controls="navbarBasic"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse show" id="navbarBasic">
              <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                </li>
                {token == null ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Log in
                    </Link>
                    {/* <a className="nav-link" href="/login">Log in</a> */}
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="#" onClick={handleLogout}> Log out</Link>
                    {/* <a className="nav-link" href="#" onClick={handleLogout}> */}
                     
                    {/* </a> */}
                  </li>
                )}

                {flag === 1 || flag.email !== "admin@gmail.com" ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                    {/* <a className="nav-link" href="/register">Register</a> */}
                  </li>
                ) : (
                  <></>
                )}

                {flag === 1 || flag.email !== "admin@gmail.com" ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      Cart
                    </Link>
                    {/* <a className="nav-link" href="/cart">Cart</a> */}
                  </li>
                ) : (
                  <></>
                )}
                {console.log(flag.email + "===" + "admin@gmail.com")}
                {flag.email === "admin@gmail.com" ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/addbook">
                      Add book
                    </Link>
                    {/* <a className="nav-link" href="/addbook">Add book</a> */}
                  </li>
                ) : (
                  <></>
                )}
                {flag.email === "admin@gmail.com" ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/addbook">
                      Update book
                    </Link>
                    {/* <a className="nav-link" href="/updateBook">Update book</a> */}
                  </li>
                ) : (
                  <></>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/information">
                    About us
                  </Link>
                  {/* <a className="nav-link" href="/cart">Cart</a> */}
                </li>
              </ul>
              {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    );
  }
  return <></>;
}

export default NavBar;
