import React from "react";
import Usernav from "../component/usernav";
import Sidebar from "../component/sidebar";

class Dashboard extends React.Component{
    render(){
        return(
            <div className="dashboard">
                <Sidebar />
                <div className="contentarea" id="contentarea">
                        <Usernav />
                        {this.props.children}
                    </div>
            </div>
        )
    };
}



export default Dashboard;