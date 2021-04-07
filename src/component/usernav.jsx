import React from "react";
import { Link } from "react-router-dom";
import  logo from "./../assets/images/dungada-wallet.png";
import Icon from './../component/icon'

class Usernav extends React.Component{

    render(){
        return(
            <div>
                <div className="usernav">
                    <div className="navItems">
                        <div className="container">
                        <Icon icon='menu' fill='#fff' className="float-left " />
                        <Link to="/"><img src={logo} width="90px" className="logo"/></Link>
                        <div className="float-right user">
                            <div className="name float-left ">
                                <p>N</p>
                            </div>
                            <div className="float-right mt-2 pl-2">
                            <p >Nazy baby<Icon icon='arrow' fill='#fff'/></p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    };
}

export default Usernav;