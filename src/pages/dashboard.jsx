import React from "react";
import { Link } from "react-router-dom";
import card from "../assets/images/card.svg";
import Inflow from "../component/inflow chart";
import Outflow from "../component/outflow chart";

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <div className="dashboardContent">

                    {/* card section */}
                    <div className="cardSection">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={card} width="320px"/>
                                </div>
                                <div className="col-sm-8">
                                    <button className="cardBtn">Fund Wallet</button>
                                    <button className="cardBtn">Send Wallet</button>
                                    <button className="cardBtn">Receive Payment</button>
                                    <button className="cardBtn">All Transactions</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card section ends */}
                    {/* chart section */}
                    <div className="chartSection mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="chart inflow">
                                        <Inflow/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="chart outflow">
                                        <Outflow/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* chart section ends */}
                </div>
                                
            </div>
        )
    };
}



export default Dashboard;