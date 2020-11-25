import React from "react";
import {Link} from "react-router-dom";



class Footer extends React.Component{
    render(){
        return(
            <div> 
                <footer className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="social-menu list-inline">
                                    <li>
                                        <Link to="#" className="fab fa-twitter list-inline-item social-links"></Link>
                                        <Link to="#" className="fab fa-youtube list-inline-item social-links"></Link>
                                        <Link to="#" className="fab fa-facebook list-inline-item social-links"></Link>
                                        <Link to="#" className="fab fa-instagram list-inline-item social-links"></Link>
                                        <Link to="#" className="fab fa-linkedin list-inline-item social-links"></Link>
                                    </li>
                                    <p className="small">Powered by Dungada Tech Ltd</p>
                                </div>
                            </div>
                    

                            <div className="col-sm-6 links">                    
                                <ul className="menu list list-inline">
                                    <Link to="#" className="social-links p-1"><li className="list-inline-item">About</li></Link> 
                                    <Link to="#" className="social-links p-1"><li className="list-inline-item">Terms & condition</li></Link> 
                                    <Link to="#" className="social-links p-1"><li className="list-inline-item">Legal</li></Link>
                                    <Link to="#" className="social-links p-1"><li className="list-inline-item">Blog</li></Link>  
                                </ul>
                            </div>
                        </div>
                    </footer>
            </div>
        )
    };
}



export default Footer;