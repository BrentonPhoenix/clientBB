import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import APIURL from "../helpers/environment";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({user: {
                email,
                password
            }}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then (
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
        .catch(e => console.log(e))
    }


    return(
        <div className="mainDiv">
            <h1>
                Login
            </h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    
                    <Input placeholder="example@email.com" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <br/>
                <FormGroup>
                <Label htmlFor="password">Password</Label>
                
                    <Input placeholder="Enter password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </FormGroup>
                <br/>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )}

    export default Login