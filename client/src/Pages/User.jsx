/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

function User() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="justify-content-center d-flex text-light">
      <div className="container m-5">
        <div className="justify-content-end d-flex">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-light">
              <li
                className={`breadcrumb-item ${
                  currentPage === "dashboard" ? "active text-white fw-bold" : ""
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
                  currentPage === "settings" ? "active text-white fw-bold" : ""
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
                <div className="justify-content-end d-flex">
                <button type="button" className="btn fw-bold ps-5 pe-5 m-0">Apply</button>
                </div>
                
              </div>
            </div>
          )}

          {currentPage === "settings" && (
            <div>
                <h3 className="fw-bold">Settings</h3>
              <form className="m-5 p-5 border border-light rounded" action="">
                
                <div className="m-4">
                  <h4>Username: test</h4>
                </div>
                <div className="m-4">
                  <label forHtml="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Current Password"
                  />
                </div>
                <div className="m-4">
                  <label forHtml="newPasswordInput" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPasswordInput"
                    placeholder="New Password"
                  />
                </div>
                <div className="m-4">
                  <label forHtml="rePasswordInput" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="rePasswordInput"
                    placeholder="Re-Type Password"
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

export default User;
