import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Herobox from "../component/Herobox";

 
class Home extends React.Component{
    render(){
        return(
                <div>
                    <Navbar />
                    <Herobox />
                    <Footer />
                </div>
        )
    };
}

export default Home;