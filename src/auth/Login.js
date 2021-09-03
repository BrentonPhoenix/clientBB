import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/user/login', {
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
        <div>
            <h1>
                Login
            </h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <br/>
                    <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <br/>
                <FormGroup>
                <Label htmlFor="password">Password</Label>
                <br/>
                    <Input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </FormGroup>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )}

    export default Login