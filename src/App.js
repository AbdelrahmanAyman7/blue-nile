/* eslint-disable react/jsx-pascal-case */
import React,{useState} from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import { fadeIn } from 'react-animations'
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Boss from './pages/Boss/Boss';
import AdminSlider from './pages/AdminSlider/AdminSlider';
import Notifications from './pages/Notifications/Notifications';
import Regions from './pages/Regions/Regions';
import Statics from './pages/Statics/Statics';
import Support from './pages/Support/Support';
import Admin from "./pages/Admin/Admin";
import Engineers from "./pages/Engineers/Engineers";
import Eng from './pages/Eng/Eng';
import Admin_Regions from './pages/AdminRegions/AdminRegions';
import Error from './pages/Error/Error';




const App = () => {
  
const [change,setChange]=useState(false)
const [adminReg,setAdminReg]= useState([])
const [adminRegDetails,setAdminRegDetails]= useState([])




console.log(change)
  const tok=localStorage.getItem("tokken")
  const cc=localStorage.getItem('checked')
  // localStorage.clear()
//  const [flag, setFlag] = useState(false)
  // if(tok!==""){
  //   setFlag(true)
  // }
  console.log("my flag",tok)
  // {flag ? <Redirect to="/boss" /> : <Boss />}
  console.log("Adminreeeg",adminReg)
    return (
      <Router>
       <Switch>
        <Route exact path="/" component={SignUpForm} />
        <Route exact path="/sign-in"  render = {(props) => <SignInForm setAdminReg = {setAdminReg} {...props} /> }/>
        <Route exact path="/Admin" component= {()=><Admin autho={cc}/>} />
        <Route exact path="/boss" component= {()=><Boss autho={cc}/>} />
        <Route exact path="/adminSlider" component= {()=><AdminSlider autho={cc}/>} />
        <Route exact path="/Notifications" component={Notifications} />
        <Route exact path="/regions" component={Regions} />
        <Route exact path="/engineers" component={Engineers} />              
        <Route exact path="/statics" component={Statics} />
        <Route exact path="/support" component={Support} /> 
        <Route exact path="/eng/:id" render = {(props) => <Eng adminReg  = {adminReg} {...props} /> } />
        <Route exact path="/adminRegions" render = {(props) => <Admin_Regions adminReg = {adminReg}  {...props} /> } />
        <Route exact path="/error" component={Error} />
        </Switch>
      </Router>
    );
  }


export default App;
