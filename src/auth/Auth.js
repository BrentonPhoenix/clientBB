import React, {useState} from 'react'
import { Container, Button } from 'reactstrap'
import Register from './Register'
import Login from './Login'



const Auth = (props) => {
   const [login,setLogin] = useState(false) 

    let flipLogin = ()=> setLogin(!login)
   
   return(
        <Container className="auth-container">
         
           {login ? <Login updateToken={props.updateToken}/>  :  <Register updateToken={props.updateToken}/>}
           <Button onClick={flipLogin}>Need to {login ? <>Register</> : <>Login</>}</Button>
        </Container>
    )
}

export default Auth