import React from "react";
import "./Settings.css";
import Topbar from "../../components/topbar/Topbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
function Settings() {
  return (
    <>
      <Topbar />
      <div className="SettingsContainer">
        <h1 className="h3 mb-3">Settings</h1>
        <div className="row">
          <div className="col-md-5 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Profile Settings</h5>
              </div>
              <div className="list-group list-group-flush" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  data-toggle="list"
                  href="#account"
                  role="tab"
                >
                  Account
                </a>

                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#"
                  role="tab"
                >
                  Delete account
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-xl-8">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
              >
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Private info</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputFirstName">First name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputFirstName"
                            placeholder="First name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputLastName">Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputLastName"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputEmail4">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <label for="inputAddress">Date de Naissance</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="inputAddress2">Adresse </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="adresse"
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputCity">Phone number</label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputCity"
                          />
                        </div>

                        {/*  tags for categories */}
                        <legend>Choose your categories</legend>
                        <div>
                          <input
                            type="checkbox"
                            id="coding"
                            name="interest"
                            value="coding"
                            checked
                          />
                          <label for="coding">sports</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            id="music"
                            name="interest"
                            value="music"
                          />
                          <label for="music">Music</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            id="music"
                            name="interest"
                            value="music"
                          />
                          <label for="music">art</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            id="music"
                            name="interest"
                            value="music"
                          />
                          <label for="music">Politics</label>
                        </div>
                      </div>
                      <div className="submitbutton">
                        {" "}
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="password" role="tabpanel">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Password</h5>
                    <form>
                      <div className="form-group">
                        <label for="inputPasswordCurrent">
                          Current password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordCurrent"
                        />
                        <small>
                          <a href="#">Forgot your password?</a>
                        </small>
                      </div>
                      <div className="form-group">
                        <label for="inputPasswordNew">New password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordNew"
                        />
                      </div>
                      <div className="form-group">
                        <label for="inputPasswordNew2">Verify password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordNew2"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
