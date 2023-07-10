import React from "react";

export default class Navbar extends React.Component {
  constructor() {
    super()
  }
  render() {
    const avtarStyle = { width: '40px', height: '40px' };
    return (
      <nav className="navbar navbar-expand-sm bg-info navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#"><h2>Health care</h2></a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <a className="navbar-brand" href="#">
            <div className="rounded-circle border d-flex justify-content-center align-items-center" style={avtarStyle} alt="Avatar">
              <i className="fa-thin fa-user-tie"></i>
            </div>
          </a>
        </form>
      </nav >
    );
  }
}
