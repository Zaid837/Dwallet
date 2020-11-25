import React from "react";
import bt from "../assets/images/bt.png";


class SendMoney extends React.Component{
    render(){
        return(
            <div>
                <h1>Send Money</h1>
                <p>Select the method you will love to send money with</p>
                <div className="row mt-5">
                    <div className="col-sm"></div>
                    <div className="col-sm-1">Or</div>
                    <div className="col-sm">
                        <center>
                            <div className="card" style={{width:250}}>
                                <img className="card-img-top" src={bt}/>
                                <div className="card-body">
                                <h3 className="card-title text-capitalize">to a local bank account</h3>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        )
    };
}

export default SendMoney;