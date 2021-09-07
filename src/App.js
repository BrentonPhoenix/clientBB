import React, {useState, useEffect} from "react";
import Header from "./site/Header";
import Auth from "./auth/Auth"
import MonsterIndex from "./monsters/MonsterIndex";
import Footer from "./site/Footer";
import './App.css'



function App () {
  const [sessionToken, setSessionToken] = useState("");
  const [createEdit, setCreateEdit] = useState(false)


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
return(sessionToken === localStorage.getItem("token") ? <MonsterIndex createEdit={createEdit} setCreateEdit={setCreateEdit}  token = {sessionToken}/> : <Auth updateToken = {updateToken}/>)
  }

  return (

    <div className="App">
      <Header createEdit={createEdit} setCreateEdit={setCreateEdit} clickLogout={clearToken} />
      {protectedViews()}
      <Footer/>
    </div>

  );
};

export default App;