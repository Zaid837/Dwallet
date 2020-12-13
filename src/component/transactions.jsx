import React from "react";
import dwall from "../assets/images/dwall.svg";
import path from "../assets/images/Path.svg";
import bank from "../assets/images/bank-transfer.svg";

class Transactions extends React.Component{
    render(){
        return(
            <div>
                <div className="sendMoney">
                    <div className="container">
                        <div className="row">
                            <div className="sendTitle mt-5">
                                <h5>Send money to a friend</h5>
                                <p>Choose your preferred sending option</p>
                                <div className="line"></div>
                            </div>
                            <div className="sendCards mt-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="sendCard1">
                                                <div className="cardContent">
                                                    <div className="cardIcon">
                                                        <img src={dwall} alt="" className="dwall"/>
                                                        <img src={path} alt="" className="path"/>
                                                    </div>
                                                    <div className="cardText">
                                                        <p>Send to D wallet</p>
                                                        <p>Send to another D wallet user</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="sendCard2 ml-5">
                                            <div className="cardContent">
                                                <div className="cardIcon">
                                                    <img src={bank} alt="" className="bank"/>
                                                    <img src={path} alt="" className="path"/>
                                                </div>
                                                    <div className="cardText">
                                                        <p>Send to bank</p>
                                                        <p className="transfer">Transfer money to a beneficiary's bank account</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Transactions;