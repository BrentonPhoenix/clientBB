import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Register from './Register'
import Login from './Login'



const Auth = (props) => {
    

    return(
        <Container className="auth-container">
            <Row>
                    {/* terinary here to switch between Login and Register */}
            <Login/>    <Register/>
            </Row>
        </Container>
    )
}

export default Auth