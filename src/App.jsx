import React from "react";
import Dashboard from "./dashboard/container/dashboard";
import Navbar from "./common/component/NavBar";
import Sidebar from "./common/component/Sidebar";

export default class App extends React.Component {
  constructor() {
    super();
}
render() {
  const _date = new Date().toLocaleDateString();
  return (
    <div id="health_care" className="health_care">
      <div className="nav_bar">
        <Navbar />
      </div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="container-fluid appbar">
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-12"><h5>Dashboard</h5></div>
              </div>
              <div className="col-md-6 text-end">
                <div className="col-md-12">
                  <strong>{_date}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid dashboard p-3">
            <Dashboard />
          </div>
        </div>
      </div>
    </div >
  );
};
}
