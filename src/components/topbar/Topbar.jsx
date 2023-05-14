import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <nav>
      <div className="container">
        <h2 className="log">NewSocial</h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input type="search" placeholder="Search for categories" />
        </div>

        <div className="create">
          <img src="assets/home.png" alt="" />
          <img src="assets/notif.png" alt="" />
          <img src="assets/chat.png" alt="" />

          <div className="profile-photo">
            <img src="assets/persons/2.jpg" alt="" />
          </div>
          <label className="btn btn-primary" htmlFor="create-post">
            Settings
          </label>
        </div>
      </div>
    </nav>
  );
}
