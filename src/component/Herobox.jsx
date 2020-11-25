import React from "react";
import  Awoman from "./../assets/images/African Woman.png";
import  Africa from "./../assets/images/Africa.png";
import { Link } from "react-router-dom";

class Herobox extends React.Component{     
    render(){
        return(
            <div>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="home-header">one wallet for all your offline and online transactions </h1>
                            <p>Recieve and make payment online (without exposing your card details) and offline, easily transfer money to loved ones with no extra charges, eradicates trust issues between online buyers and sellers through pending payment feature and control your general expenses using the expense control feature.</p>
                            <Link to="/login" className="btn pri-btn">Start now</Link>
                        </div>

                        <div className="col-sm-6">
                            <center>
                                <img src={Awoman} className="picture"/>
                                <i><img src={Africa} className="map desktop" width="250px"/></i>
                            </center>
                        </div>
                    </div>

                </div>

            </div>
        )
    };
}

export default Herobox;