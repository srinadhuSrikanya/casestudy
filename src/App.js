
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
import './App.css';

import AuthService from "./services/AuthService";

import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import Profile from "./component/Profile";
import FarmerComponent from "./component/FarmerComponent";
import DealerComponent from "./component/DealerComponent";
import AdminComponent from "./component/AdminComponent";
import ViewCropComponent from "./component/ViewCropComponent";
import CreateCropComponent from "./component/CreateCropComponent";
import About from "./component/About";
import ListCrops from "./component/ListCrops";
import UpdateCropComponent from "./component/UpdateCropComponent";
import ViewCart from "./component/ViewCart";
import ListCropComponent from "./component/ListCropComponent";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import CartComponent from "./component/CartComponent";
import StripeButton from "./component/StripeButton";
import FarmerSignup from "./component/FarmerSignup";
class App extends Component {
constructor(props) {
  super(props);
  this.logOut = this.logOut.bind(this);

  this.state = {
    showFarmerBoard: false,
    showAdminBoard: false,
    showDealerBoard:false,
    currentUser: undefined,
  };
}

componentDidMount() {
  const user = AuthService.getCurrentUser();

  if (user) {
    this.setState({
      currentUser: user,
      showFarmerBoard: user.roles.includes("ROLE_FARMER"),
      showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      showDealerBoard:user.roles.includes("ROLE_DEALER"),
    });
  }
  
  EventBus.on("logout", () => {
    this.logOut();
  });
}

componentWillUnmount() {
  EventBus.remove("logout");
}

logOut() {
  AuthService.logout();
  this.setState({
    showFarmerBoard:false,
    showAdminBoard: false,
    currentUser: undefined,
  });
}

render() {
  const { currentUser, showAdminBoard,showFarmerBoard,showDealerBoard } = this.state;

  return (
    <div className="picture">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
         CROP DEAL!
        </Link>
        <div className="navbar-nav mr-auto">
          <li style={{paddingTop:"15px"}}className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li style={{paddingTop:"15px"}} className="nav-item">
            <Link to={"/about"} className="nav-link">About
            </Link>
          </li>
          {showDealerBoard && (
<div className="navbar-nav ml-auto">
           <li className="nav-item" >
           <Link to={"/dealer"} className="nav-link" ></Link>   
           </li>
           <li  className="nav-item">
           <Link to={"/crop"} className="nav-link" style={{paddingTop:"23px"}}> View Crops</Link>
           </li>
           <li  className="nav-item">
           <Link to={"/view-cart"} className="nav-link" style={{paddingTop:"23px"}} > Cart</Link>
           </li>
           </div>
         )}
    
         {/*{showDealerBoard && (
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle bg-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                DealerBoard
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
              <li><a class="dropdown-item" href="dealer">dealer</a></li>
                <li><a class="dropdown-item" href="crop">view crops</a></li>
                
              </ul>
            </li>
         )}*/}
        
          
          {showFarmerBoard && (
            <li style={{paddingTop:"16px"}} className="nav-item" >
              {/*<Link to={"/dealer"} className="nav-link"></Link>*/}
              <Link to={"/crops"} className="nav-link">
                edit Crops
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <div className="navbar-nav ml-auto">
            <li className="nav-item">
              {/*<Link to={"/admin"} className="nav-link" style={{paddingTop:"23px"}}>
                Admin 
          </Link>*/}
              <Link to={"/farmerSignup"} className="nav-link" style={{paddingTop:"23px"}}> Farmer</Link>
            </li>
            <li  className="nav-item">
           <Link to={"/crop"} className="nav-link" style={{paddingTop:"23px"}}> View Crops</Link>
           </li>
           <li  className="nav-item">
           <Link to={"/view-cart"} className="nav-link" style={{paddingTop:"23px"}} > Cart</Link>
           </li>
           { /*  <li style={{ paddingTop: "16px" }} className="nav-item" >
                
                <Link to={"/crops"} className="nav-link">
                  edit Crops
                </Link>
        </li>*/}
            </div>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li style={{paddingTop:"16px"}}className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
        </Link>
        </li>
            <li style={{marginLeft:"900px",paddingTop:"20px"}}className="nav-item" >
              <a href="/login" className="nav-link" onClick={this.logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li style={{paddingTop:"16px"}} className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li style={{paddingTop:"16px"}} className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/farmer" component={FarmerComponent} />
          <Route path="/dealer" component={DealerComponent} />
          <Route path="/admin" component={AdminComponent} />
          <Route path = "/" exact component = {ListCropComponent}></Route>
          <Route path = "/crop" component = {ListCropComponent}></Route>
          <Route path = "/update-crop/:id" component = {UpdateCropComponent}></Route>
          <Route path = "/crops" component = {ListCrops}></Route> 
          <Route path = "/add-crop/:id" component = {CreateCropComponent}></Route> 
          <Route path = "/view-crop/:id" component = {ViewCropComponent}></Route>         
          <Route path="/add-cart/:id"  component={CartComponent}></Route>
          <Route path="/view-cart"  component={ViewCart}></Route>
          
          <Route path="/farmerSignup"  component={FarmerSignup}></Route>
        </Switch>
      </div>

      { /*<AuthVerify logOut={this.logOut}/> */ }
    </div>
  );
}
}

export default App;
