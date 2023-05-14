import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="left">
      <a href="" className="profile">
        <div className="profile-photo">
          <img src="assets/persons/2.jpg" alt="" />
        </div>
        <div className="handle">
          <h4>Youssef Labidi</h4>
          <p className="text-muted">@yousseflabidi</p>
        </div>
      </a>

      <div className="sidebar">
        <div className="sidebar-list">
          <h2 className="categories">Categories</h2>

          <h5 className="all">All</h5>
          <h5 className="menu">Music</h5>
          <h5 className="menu">Sports</h5>
          <h5 className="menu">Politics</h5>
          <button class="button-17" role="button">
            Logout
          </button>
          <span className="span">@NewSocial All right reserved</span>
        </div>
      </div>
    </div>
  );
}
