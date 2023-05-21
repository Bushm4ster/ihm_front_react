import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo">
          <h2 className="log">NewSocial</h2>
        </Link>

        <div className="create">
          <img src="assets/home.png" alt="" />
          <img src="assets/notif.png" alt="" />
          <Link to="/settings"><img src="assets/setting.png" alt="" style={{width: '30px'}}/>
          </Link>
          <Link to="/profile">
            <label className="btn btn-primary">
              Profile
            </label>
          </Link>
        </div>
      </div>
    </nav>
  );
}
