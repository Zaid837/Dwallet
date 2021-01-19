import React from "react";
import $ from "jquery";
import "./App.css";
import Home from './pages/Home';
import Login from './pages/Login';
import UserDashboard from './layouts/user-dashboard';
import FundWallet from "./component/fund-wallet";
import SendMoney from "./component/send-money";
import ReceivePayment from "./component/receive-payment";
import Transactions from "./component/transactions";
import Dashboard from './pages/dashboard'; 
//import "./assets/JS/DW";
import "./assets/css/mediaquery.css";
import "./component/Navbar";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Fund from "./component/fund";
import Profile from "./component/profile";


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard"><UserDashboard children={<Dashboard/>}/></Route>
            <Route path="/fund-wallet"><UserDashboard children={<FundWallet/>}/></Route>
            <Route path="/send-money"><UserDashboard children={<SendMoney/>}/></Route>
            <Route path="/receive-payment"><UserDashboard children={<ReceivePayment/>}/></Route>
            <Route path="/transactions"><UserDashboard children={<Transactions/>}/></Route>
            <Route path="/fund"><UserDashboard children={<Fund/>}/></Route>
            <Route path="/profile"><UserDashboard children={<Profile/>}/></Route>

            {/* <Route path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </Router>
      </div>
    )
  };
}

export default App;


