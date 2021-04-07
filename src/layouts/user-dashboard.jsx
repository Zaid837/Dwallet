import React from "react";
import Usernav from "../component/usernav";
import Sidebar from "../component/sidebar";

class Dashboard extends React.Component {
  menu = () => {
    var w = window.innerWidth;
    if (w > 768) {
      document.getElementById("sidebar").classList.toggle("hide-sidebar");
      document
        .getElementById("contentarea")
        .classList.toggle("hide-contentarea");
    } else {
      document.getElementById("sidebar").classList.toggle("show-sidebar");
      document
        .getElementById("contentarea")
        .classList.toggle("show-contentarea");
    }
  };

  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <div className="contentarea" id="contentarea">
          <Usernav />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dashboard;
