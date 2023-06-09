import { useState } from "react";

function Recruiter () {
    const [currentPage, setCurrentPage] = useState("dashboard");
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <div className="justify-content-center d-flex text-light">
        <div className="container m-5">
          <div className="justify-content-end d-flex">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li
                  className={`breadcrumb-item ${
                    currentPage === "dashboard" ? "active" : ""
                  }`}
                >
                  {currentPage === "dashboard" ? (
                    <span>Dashboard</span>
                  ) : (
                    <a href="#" onClick={() => handlePageChange("dashboard")}>
                      Dashboard
                    </a>
                  )}
                </li>
                <li
                  className={`breadcrumb-item ${
                    currentPage === "profile" ? "active" : ""
                  }`}
                >
                  {currentPage === "profile" ? (
                    <span>Profile</span>
                  ) : (
                    <a href="#" onClick={() => handlePageChange("profile")}>
                      Profile
                    </a>
                  )}
                </li>
                <li
                  className={`breadcrumb-item ${
                    currentPage === "settings" ? "active" : ""
                  }`}
                >
                  {currentPage === "settings" ? (
                    <span>Settings</span>
                  ) : (
                    <a href="#" onClick={() => handlePageChange("settings")}>
                      Settings
                    </a>
                  )}
                </li>
              </ol>
            </nav>
          </div>
  
          <div className="ms-5 me-5 mb-5 p-5">
            {currentPage === "dashboard" && (
              <div>
                <h3 className="fw-bold">Welcome, username</h3>
                <div className="m-5 p-5 border border-light rounded">
                  <h3 className="fw-bold">Looking for Sentinel Players</h3>{" "}
                  {/* Subject of the post */}
                  <h4>Valorant | E-Academy</h4>{/* Game Name | Company Name*/}
                  <p className="text-truncate"> {/* Short Description */}
                    I'm looking for players who can commit to a regular practice
                    schedule. It's important that we can coordinate our playing
                    hours and have consistent availability for team practices and
                    competitive matches.
                  </p>
                </div>
              </div>
            )}
            {currentPage === "profile" && (
              <div>
                <h3 className="fw-bold">Profile</h3>
                <form className="m-5 p-5 border border-light rounded" action="">
                  
                  <div className="m-4">
                    <h4>What do you want to post?</h4>
                  </div>
                  <div className="m-4">
                    <label for="textInput" class="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="textInput"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="m-4">
                    <label for="gameNameInput" class="form-label">
                      Game Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="gameNameInput"
                      placeholder="Game Name"
                    />
                  </div>
                  <div className="m-4">
                    <label for="companyNameInput" class="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="companyNameInput"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="m-4">
                    <label for="detailsInput" class="form-label">
                      Details
                    </label>
                    <textarea
                      type="password"
                      class="form-control"
                      id="detailsInput"
                      placeholder="Write short description here ..."
                    />
                  </div>
                  <div className="justify-content-center d-flex">
                      <button type="submit" className="btn btn-lg fw-bold ps-5 pe-5">Post</button>
                  </div>
                </form>

                <div>
                <div className="m-5 p-5 border border-light rounded">
                  <h3 className="fw-bold">Looking for Sentinel Players</h3>{" "}
                  {/* Subject of the post */}
                  <h4>Valorant | E-Academy</h4>{/* Game Name | Company Name*/}
                  <p className="text-truncate"> {/* Short Description */}
                    I'm looking for players who can commit to a regular practice
                    schedule. It's important that we can coordinate our playing
                    hours and have consistent availability for team practices and
                    competitive matches.
                  </p>
                  <div className="justify-content-end d-flex">
                  <button type="button" className="btn fw-bold ps-5 pe-5">View</button>
                <button type="button" className="btn fw-bold ps-5 pe-5">Edit</button>
                <button type="button" className="btn fw-bold ps-5 pe-5">Delete</button>
                </div>
                </div>
              </div>
              </div>
            )}
            {currentPage === "settings" && (
              <div>
                  <h3 className="fw-bold">Settings</h3>
                <form className="m-5 p-5 border border-light rounded" action="">
                  
                  <div className="m-4">
                    <h4>Username: Test</h4>
                  </div>
                  <div className="m-4">
                    <label for="passwordInput" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="passwordInput"
                      placeholder="Current Password"
                    />
                  </div>
                  <div className="m-4">
                    <label for="newPasswordInput" class="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="newPasswordInput"
                      placeholder="Current Password"
                    />
                  </div>
                  <div className="m-4">
                    <label for="rePasswordInput" class="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="rePasswordInput"
                      placeholder="Current Password"
                    />
                  </div>
                  <div className="justify-content-center d-flex">
                      <button type="submit" className="btn btn-lg fw-bold">Update Password</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

export default Recruiter;