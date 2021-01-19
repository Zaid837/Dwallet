import React from "react";
import fund from "../assets/images/fund.png";
import path from "../assets/images/Path.svg";
import money from "../assets/images/money.svg";

class Fund extends React.Component{
    render(){
        return(
            <div>
                <div className="sendMoney">
                    <div className="container">
                        <div className="row">
                            <div className="sendTitle mt-5">
                                <h5>Fund Money</h5>
                                <p>Choose your preferred funding option</p>
                                <div className="line"></div>
                            </div>
                            <div className="sendCards mt-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="sendCard1">
                                                <div className="cardContent">
                                                    <div className="cardIcon">
                                                        <img src={fund} alt="" className="fund"/>
                                                        <img src={path} alt="" className="path"/>
                                                    </div>
                                                    <div className="cardText">
                                                        <p>Debit Card Top Up</p>
                                                        <p>Top up your wallet using your debit card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="sendCard2 ml-5">
                                            <div className="cardContent">
                                                <div className="cardIcon">
                                                    <img src={money} alt="" className="money"/>
                                                    <img src={path} alt="" className="path"/>
                                                </div>
                                                    <div className="cardText">
                                                        <p>Fund from bank</p>
                                                        <p className="transfer">Top up your wallet via your bank app</p>
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

export default Fund;