import React from "react";
import user from "../assets/images/user.svg";
import email from "../assets/images/email.svg";
import phone from "../assets/images/phone.svg";
import padlock from "../assets/images/padlock.svg";

class Profile extends React.Component{
    render(){
        return(
            <div>
                <div className="profile">
                    <div className="container">
                        <div className="profileBg">
                            <div>
                                <div className="profileImg"></div>
                                <p className="text-center mt-2 mb-0 username">John Micheal</p>
                                <p className="text-center profileText mt-2">Manage dungada account details</p>
                            </div>

                            {/* contact details */}
                            <div className="mt-5 contactSection">
                                <h5 className="contact">Contact Details</h5><span className="ml-2 info"><p className="infoI">i</p></span>
                            </div>

                            <div className="contactForm">
                                <div className="inputField mt-2">
                                    <img src={user} alt="" className="user mr-3"/>
                                    <input placeholder="Name"></input>
                                </div>
                                <div className="inputField mt-2">
                                    <img src={email} alt="" className="email mr-3"/>
                                    <input placeholder="Email"></input>
                                </div>
                                <div className="inputField mt-4">
                                    <img src={phone} alt="" className="phone mr-3"/>
                                    <input placeholder="Phone number"></input>
                                </div>
                                <div className="inputField mt-4">
                                    <input placeholder="XXXX-XXXX-XXXX-XXXX"></input>
                                </div>
                            </div>

                            <button className="mt-2 mb-3 updateBtn">Update</button>


                            <h5 className="account mt-5">Account details</h5>
                            <div className="contactForm">
                                <div className="inputField mt-2">
                                    <img src={padlock} alt="" className="padlock mr-3"/>
                                    <input placeholder="Change password"></input>
                                </div>
                                <div className="inputField mt-2">
                                    <img src={padlock} alt="" className="padlock mr-3"/>
                                    <input placeholder="Change transfer code"></input>
                                </div>
                                <div className="inputField mt-4">
                                    <img src={padlock} alt="" className="padlock mr-3"/>
                                    <input placeholder="Manage d-wallet I.D"></input>
                                </div>
                                <div className="inputField mt-4">
                                    <img src={padlock} alt="" className="padlock mr-3"/>
                                    <input placeholder="My d-wallet account number"></input>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;