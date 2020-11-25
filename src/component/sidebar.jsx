import React from "react";
import { Link } from "react-router-dom";


class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <div className="sidebar position-fixed" id="sidebar">
                    
                    <div className="wallet-id-box">
                        <h3>Samuel Linus</h3>
                        <p className="small">W.ID: 0001235</p>
                    </div>

                    <div className="mt-3">
                        <ul className="list-unstyled">
                            <li className=" sidelist"><Link to="/fund-wallet"><i class ="fas fa-wallet mr-3"></i> Fund wallet</Link></li>
                            <li className=" sidelist"><Link to="/send-money"><i class ="fas fa-paper-plane mr-3"></i> Send Money</Link></li>
                            <li className=" sidelist"><Link to="/receive-payment"><i class ="fas fa-arrow-down mr-3"></i> Receive Payment</Link></li>
                            <li className=" sidelist"><Link to="/transactions"><i class ="fas fa-calendar-minus mr-3"></i> Transactions</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    };
}

export default Sidebar;