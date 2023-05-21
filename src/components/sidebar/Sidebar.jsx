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
      <div className="sidebar-profile">
        <div className="sidebar-photo">
          <img src="assets/persons/2.jpg" alt="" />
        </div>
        <div className="handle">
          <p>Haytham Gharam</p>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-list">
          <table>
            <tr>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-left">
                      <i className="fas fa-home"></i>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-right">
                      <p>Home</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-left">
                      <i className="fas fa-bell"></i>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-right">
                      <p>Notifications</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-left">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-right">
                      <p>Messages</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-left">
                      <i className="fas fa-bookmark"></i>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-right">
                      <p>Bookmarks</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-left">
                      <i className="fas fa-list"></i>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-right">
                      <p>Categories</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-left">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="sidebar-list-item">
                  <div className="sidebar-list-item-content">
                    <div className="sidebar-list-item-content-right">
                      <p>Profile</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
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
