import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/footer.css";
import { FaMobileAlt, FaEnvelope, FaRegAddressCard } from "react-icons/fa";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className=" col-md-4">
              <h3>Contact US</h3>
              <ul className="conta">
                <li>
                  <FaRegAddressCard /> Abhishek Sapkal
                  <br />
                  <FaMobileAlt /> 0405250217
                  <hr style={{ color: "white" }} />
                  <FaRegAddressCard /> Rahul Singh
                  <br />
                  <FaMobileAlt /> 1234569540
                </li>
                <li>
                  {" "}
                  <FaEnvelope />
                  <Link to="javascript(0)"> abhi.figo.10@gmail.com</Link>
                  <br />
                  <FaEnvelope />
                  <Link to="javascript(0)"> abhi.figo.10@gmail.com</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Menu Link</h3>
              <ul className="link_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="">
                  <Link to="/stocks"> Stocks</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="social_icon"></ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p style={{ marginTop: "1rem" }}>
                  © {year} All Rights Reserved.
                  <br />
                  Developed by <Link to="javascript(0)">Abhi and Rahul</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
