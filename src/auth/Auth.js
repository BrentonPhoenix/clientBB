import React, {useState} from 'react'
import { Container, Button } from 'reactstrap'
import Register from './Register'
import Login from './Login'



const Auth = (props) => {
   const [login,setLogin] = useState(false) 

   let flipLogin = ()=> setLogin(!login)
   
   return(
        <Container className="auth-container">
         <div className="loginDiv">
           {login ? <Login updateToken={props.updateToken}/>  :  <Register updateToken={props.updateToken}/>}
           <Button onClick={flipLogin}>Switch to {login ? <>Register</> : <>Login</>}</Button>
           </div>
        </Container>
    )
}

export default Auth