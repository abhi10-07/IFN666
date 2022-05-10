import { NavLink } from "react-router-dom";

import "../../assets/css/header.css";
import "../../assets/css/responsive.css";
import LOGO from "../../assets/images/logo-stock-market.png";
import navLogo from "../../assets/images/menu_icon.png";
// import { FaSearch } from "react-icons/fa";
import SearchBox from "../UI/SearchBox";

const Header = (props) => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <NavLink to="/">
                      <img
                        src={LOGO}
                        alt="Stock Market Website"
                        style={{ width: "75px" }}
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <SearchBox />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    className="navbar-toggler-icon"
                    style={{
                      backgroundImage: "url(" + navLogo + ")",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li
                      className={`nav-item ${
                        props.activeState === "home" ? " active" : ""
                      }`}
                    >
                      <NavLink
                        className="nav-link"
                        to="/"
                        onClick={props.onclick}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li
                      className={`nav-item ${
                        props.activeState === "all_stock" ? " active" : ""
                      }`}
                    >
                      <NavLink
                        className="nav-link"
                        to="/stocks"
                        onClick={props.onclick}
                      >
                        Stocks
                      </NavLink>
                    </li>
                    {/* <li
                      className={`nav-item ${
                        props.activeState === "price" ? " active" : ""
                      }`}
                    >
                      <NavLink
                        className="nav-link"
                        to="/prices"
                        onClick={props.onclick}
                      >
                        History
                      </NavLink>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
