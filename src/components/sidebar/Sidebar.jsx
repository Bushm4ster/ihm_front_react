import React, { useState, useHistory } from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [allChecked, setAllChecked] = useState(false);
  const [musicChecked, setMusicChecked] = useState(false);
  const [sportsChecked, setSportsChecked] = useState(false);
  const [politicsChecked, setPoliticsChecked] = useState(false);

  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    setMusicChecked(!allChecked);
    setSportsChecked(!allChecked);
    setPoliticsChecked(!allChecked);
  };

  const handleMusicChecked = (event) => {
    setMusicChecked(event.target.checked);
    if (!event.target.checked) {
      setAllChecked(false);
    } else if (sportsChecked && politicsChecked) {
      setAllChecked(true);
    }
  };

  const handleSportsChecked = (event) => {
    setSportsChecked(event.target.checked);
    if (!event.target.checked) {
      setAllChecked(false);
    } else if (musicChecked && politicsChecked) {
      setAllChecked(true);
    }
  };

  const handlePoliticsChecked = (event) => {
    setPoliticsChecked(event.target.checked);
    if (!event.target.checked) {
      setAllChecked(false);
    } else if (musicChecked && sportsChecked) {
      setAllChecked(true);
    }
  };

  return (
    <div className="left">
      <a href="" className="sidebar-profile">
        <div className="profile-photo">
          <img src="assets/persons/2.jpg" alt="" />
        </div>
        <div className="handle">
          <h4>Youssef Labidi</h4>
        </div>
      </a>
      <div className="sidebar">
        <div className="sidebar-list">
          <div className="categories">
            <h2 className="categoriesTitle">Categories</h2>
            <div className="cateogriesList">
              <h4 className="all">
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  checked={allChecked}
                  onChange={handleAllChecked}
                />
                All
              </h4>
              <h4 className="menu">
                <input
                  type="checkbox"
                  name="music"
                  id="music"
                  checked={musicChecked}
                  onChange={handleMusicChecked}
                />
                Music
              </h4>
              <h4 className="menu">
                <input
                  type="checkbox"
                  name="sports"
                  id="sports"
                  checked={sportsChecked}
                  onChange={handleSportsChecked}
                />
                Sports
              </h4>
              <h4 className="menu">
                <input
                  type="checkbox"
                  name="politics"
                  id="politics"
                  checked={politicsChecked}
                  onChange={handlePoliticsChecked}
                />
                Politics
              </h4>
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
