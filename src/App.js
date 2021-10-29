import React,{useState} from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Boss from './pages/Boss/Boss';
import Notifications from './pages/Notifications/Notifications';
import Regions from './pages/Regions/Regions';
import Statics from './pages/Statics/Statics';
import Support from './pages/Support/Support';
import Admin from "./pages/Admin/Admin";
import Engineers from "./pages/Engineers/Engineers";
import { fadeIn } from 'react-animations'


const App = () => {
  
const [change,setChange]=useState(false)


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

    return (
      <Router>
       <Switch>
        <Route exact path="/" component={SignUpForm} />
        <Route exact path="/sign-in" component={SignInForm}  />
        <Route exact path="/Admin" component= {()=><Admin autho={cc}/>} />
        <Route exact path="/boss" component= {()=><Boss autho={cc}/>} />
        <Route exact path="/Notifications" component={Notifications} />
        <Route exact path="/regions" component={Regions} />
        <Route exact path="/engineers" component={Engineers} />              
        <Route exact path="/statics" component={Statics} />
        <Route exact path="/support" component={Support} />              
        </Switch>
      </Router>
    );
  }


export default App;
