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
                                <div className="col-sm-12 col-lg-4 p-0 atm">
                                    <img src={card} width="350px"/>
                                </div>
                                <div className="col-sm-8 d-none d-lg-block cardButtons">
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
                    {/* transaction history section */}
                    <div className="transHistory">
                        <div className="container">
                            <div className="transBox">
                                <div className="title">
                                    <h5>Recent transactions</h5>
                                    <p>View all your transactions</p>
                                    
                                </div>
                                <div className="transTable">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Ref no</th>
                                                    <th>Channel</th>
                                                    <th>Status</th>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09221109</td>
                                                    <td>first bank</td>
                                                    <td>Successful</td>
                                                    <td>20,000</td>
                                                    <td>11-05-2020</td>
                                                    <td>Debit</td>
                                                </tr>
                                                <tr>
                                                    <td>09221109</td>
                                                    <td>first bank</td>
                                                    <td>Successful</td>
                                                    <td>20,000</td>
                                                    <td>11-05-2020</td>
                                                    <td>Debit</td>
                                                </tr>
                                                <tr>
                                                    <td>09221109</td>
                                                    <td>first bank</td>
                                                    <td>Successful</td>
                                                    <td>20,000</td>
                                                    <td>11-05-2020</td>
                                                    <td>Debit</td>
                                                </tr>
                                                <tr>
                                                    <td>09221109</td>
                                                    <td>first bank</td>
                                                    <td>Successful</td>
                                                    <td>20,000</td>
                                                    <td>11-05-2020</td>
                                                    <td>Debit</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more">
                        <div className="container">
                            <p>more</p>
                        </div>
                        
                    </div>
                    {/* transaction history section ends */}
                </div>
                                
            </div>
        )
    };
}



export default Dashboard;