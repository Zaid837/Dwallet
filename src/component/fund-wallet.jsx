import React from "react";
import bt from "../assets/images/bt.png";
import ca from "../assets/images/ca.jfif";
import FWT from "./fundwallet-table";
import { Link } from "react-router-dom";


class FundWallet extends React.Component{
    render(){
        return(
            <div>
                <h1>Fund Wallet</h1>
                <p>Add money into your wallet by using any of the payment method below:</p>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm text-center">
                            <center>
                                <div className="card fw-card" style={{width:250}}>
                                    <img className="card-img-top" src={bt}/>
                                    <div className="card-body">
                                    <h3 className="card-title">Bank Transfer</h3>
                                    </div>
                                </div>
                            </center>
                        </div>
                        <div className="col-sm-1 text-success text-center mt-5 mb-5">Or</div>
                        <div className="col-sm text-center">
                            <center>
                                <div className="card fw-card" style={{width:250}}>
                                    <img className="card-img-top" src={ca}/>
                                    <div className="card-body">
                                    <h3 className="card-title">Debit card</h3>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>

                <h3 className="mt-5 text-success">Funding History</h3>
                <FWT />

            </div>
        )
    };
}

export default FundWallet;