import React from "react";
import  logo from "./../assets/images/dungada-wallet.png";
import { Link } from "react-router-dom";
import Howto from "./Howto";
import "../assets/JS/DW";



class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle:false
        }
    }

    toggle = () =>{
        this.setState({toggle:!this.state.toggle})
    }

    render(){
        return(
            <div>
                <div className={`howto-div ${this.state.toggle && 'showhowto'}`}>
                    <Howto />
                </div>
                 <div className="mynav">
                        <div className="container">
                            <Link to="/"><img src={logo} width="100px" className="float-left"/></Link>
                            <button className="how-btn btn" onClick={this.toggle}>How it works <i className={`fas fa-angle-${this.state.toggle ? 'up' : 'down'} ml-1`}></i></button> 
                            <ul className="mymenu list-unstyled float-right">
                                <Link to="/login" className="menu-login"><li className="list-inline-item">Login</li></Link>
                            </ul>
                        </div>

                    </div>
            </div>
        )
    };
}

export default Navbar;