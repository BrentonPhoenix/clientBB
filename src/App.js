
import React, {useState, useEffect} from "react";
import Header from "./site/Header";
import Auth from "./auth/Auth"
import MonsterIndex from "./monsters/MonsterIndex";

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

  return (
    <div>
      <Header clickLogout={clearToken} />
      {protectedViews()}

    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import Login from './auth/Login'
// function App() {
//   return (
//     <div className="App">
//    <Login/>

