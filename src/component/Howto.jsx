import React from "react";
import  form from "./../assets/images/form.png";
import  bars from "./../assets/images/bars.png";
import  smile from "./../assets/images/smiling man.png";
import { Link } from "react-router-dom";


class Howto extends React.Component{
   
    render() {
        return(
            <div>
                
                        <div className="container">
                            <div className="row justify-content-center align-items-start p-5 my-row">
                                <div className="col-sm-4 col-xs-3 my-col">
                                    1. Register
                                    <p>Create an account to receive your unique Dungada wallet ID.</p>
                                    <img src={form} className="img-fluid" />
                                </div>

                                <div className="col-sm-5 col-xs-3 my-col">
                                    2. Select any solution
                                    <p>We also offer a variety of services that makes it easier to manage your e-wallet.</p>
                                    <img src={bars} className="img-fluid" />
                                </div>

                                <div className="col-sm-3 col-xs-5 my-col">
                                    3. Enjoy quality services
                                    <p>Login and begin enjoying our quality services</p> 
                                    <img src={smile} width="180px" />
                                </div>
                            </div>
                            <div className="Start-text col-md-12 mt-2">
                                <h5>Eradicates trust issues between online buyers & sellers</h5>
                                <p>As someone who sells online, you'll agree that "Pay on Delivery" is a killer to your online business. 
                                As a buyer, you are scared to buy from an online vendor because you don't trust them. 
                                As someone who sells online , you'll agree that "Pay on Delivery" is a killer to your online business. 
                                As a buyer, you are scared to buy from an online vendor because you don't trust them.</p>
                                <Link to="/login" className="btn top-btn">Start now</Link>
                            </div>
                        </div>
                    

            </div>
        )
    };
}

export default Howto;
