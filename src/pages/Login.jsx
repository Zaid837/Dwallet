import React from "react";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


class Login extends React.Component{
    render(){
        // const {register, handleSubmit} = useForm();
        // const onSubmit = (data) => {
        //     console.log(data);
        // }
        return(
                <div>
                    <Navbar />
                    <div className="container">
                        <div className="row form-div">
                            <div className="login-div animated slideInRight">
                                    <h1 className="log mb-4">Login</h1>
                                    <form method="post">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email or Username" className="form-control form-input" />
                                        </div>

                                         <div className="form-group">
                                            <input type="password" name="password" placeholder="Password" className="form-control" />
                                        </div>
                                        <Link to="#"><p className="a-grey float-right small "> forgot password?</p></Link>
                                        <input type="submit" value="Login" className="btn sec-btn btn-block" />
                                    </form>
                                    
                            </div>

                            <div className="reg-div shadow-lg  animated slideInUp">
                            <h1 className="reg mb-4">Register</h1>
                            <form method="post">
                                <div className="form-group">
                                    <input type="text" name="fullname" placeholder="Fullname" className="form-control" />
                                </div>
                                <div className="form-group">
                                        <input type="email" name="email" placeholder="Email address" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="phonenumber" placeholder="Phone number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" placeholder="Password" className="form-control" />
                                </div>
                                <input type="submit" value="Register" className="btn pri-btn btn-block" />
                            </form>

                            
                        </div>

                    </div>
                </div>
                    <Footer />
                </div>
        )
    };
}

export default Login;


        