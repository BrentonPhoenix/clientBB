import React, {useState, useEffect} from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./site/Header";
import Auth from "./auth/Auth"
import MonsterIndex from "./monsters/MonsterIndex";
//import OurMenu from "./site/Header"
import Footer from "./site/Footer";
import './App.css'



function App () {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if(localStorage.getItem("token")){
      setSessionToken(localStorage.getItem("token"));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  }

  const clearToken = () =>{
    localStorage.clear();
    setSessionToken("");
  }

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem("token") ? <MonsterIndex token = {sessionToken}/> : <Auth updateToken = {updateToken}/>)
  }
{/* <MonsterIndex token = {sessionToken}/>  return to line 28* when monsterindex is functional*/}
  return (

    <div className="App">
      <Header clickLogout={clearToken} />
          {/* <OurMenu/> */}
          {/* <Switch>
            <Route exact path="/create" component="./monsters/MonsterCreate" />
            <Route exact path="/edit" component="./monsters/MonsterEdit" />
            <Route exact path="/login" component="./auth/Login" />
          </Switch> */}
      {protectedViews()}
      <Footer/>
    </div>

  );
};

export default App;