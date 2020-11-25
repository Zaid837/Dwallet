import React from "react";
import { Link } from "react-router-dom";

class ReceivePayment extends React.Component{
    render(){
        return(
            <div>
                <h1>Receive Payment</h1>
                <p>You can receive money using your wallet ID:- <Link to="">Learn More</Link></p>
                <p>You sell online? Create a payment page instead</p>
                <button className=" btn pri-btn mb-5">Create Payment page</button>
            </div>
        )
    };
}

export default ReceivePayment;