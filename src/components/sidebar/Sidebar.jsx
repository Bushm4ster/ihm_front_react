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
          <div className="categories">
            <h2 className="categoriesTitle">Categories</h2>
            <div className="cateogriesList">
              <h4 className="all"><input type="checkbox" name="all" id="all" /> All</h4>
              <h4 className="menu"><input type="checkbox" name="music" id="music" /> Music</h4>
              <h4 className="menu"><input type="checkbox" name="sports" id="sports" /> Sports</h4>
              <h4 className="menu"><input type="checkbox" name="politics" id="politics" /> Politics</h4>
            </div>
          </div>
          <div>
            <button className="button-17" role="button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
