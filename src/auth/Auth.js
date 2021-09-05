import React, {useState} from 'react'
import { Container, Button } from 'reactstrap'
import Register from './Register'
import Login from './Login'



const Auth = (props) => {
   const [login,setLogin] = useState(false) 

    let flipLogin = ()=> setLogin(!login)
   //  if close is true "we want it to open & a way to flip it" if it is false we want to  "close it and have a way to flip it."
   
   return(
        <Container className="auth-container">
         
           {login ? <Login updateToken={props.updateToken}/>  :  <Register updateToken={props.updateToken}/>}
           <Button onClick={flipLogin}>Need to {login ? <>Register</> : <>Login</>}</Button>
        </Container>
    )
}

export default Auth