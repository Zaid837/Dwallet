import React from "react";
import { Link } from "react-router-dom";


class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <div className="sidebar position-fixed" id="sidebar">
                    
                    <div className="wallet-id-box">
                        <h3>WALLET ID:</h3>
                        <p className="small">2200112233</p>
                    </div>

                    <div className="mt-3">
                        <ul className="list-unstyled">
                            <li className=" sidelist active"><Link to="/fund-wallet"><i class ="fas fa-home mr-3"></i> Dashboard</Link></li>
                            <li className=" sidelist"><Link to="/send-money"><i class ="fas fa-sign-language mr-3"></i> Transactions</Link></li>
                            <li className=" sidelist"><Link to="/receive-payment"><i class="fab fa-expeditedssl mr-3"></i>Expemse Control</Link></li>
                            {/* <li className=" sidelist"><Link to="/transactions"><i class="fas fa-file-invoice-dollar mr-3"></i> Receive Money</Link></li> */}
                            <li className=" sidelist"><Link to="/transactions"><i class="fas fa-file-import mr-3"></i>Send Money</Link></li>
                            <li className=" sidelist"><Link to="/transactions"><i class="fas fa-funnel-dollar mr-3"></i>Fund Wallet</Link></li>
                            <li className=" sidelist"><Link to="/transactions"><i class="fas fa-user-circle mr-3"></i>Account</Link></li>
                            <li className=" sidelist"><Link to="/transactions"><i class="fas fa-user-cog mr-3"></i>Settings</Link></li>
                            <li className=" sidelist"><Link to="/transactions"><i class="fas fa-users mr-3"></i>Profile</Link></li>
                            <li className=" sidelist"><Link to="/transactions"><i class="fas fa-question-circle mr-3"></i>Support</Link></li>
                            <li className=" sidelist"><Link to="/transactions"><i class="fas fa-sign-out-alt mr-3"></i>Logout</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    };
}

export default Sidebar;