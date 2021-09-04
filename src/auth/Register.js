import React, { useState } from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} 
from 'reactstrap'

const Register = (props)=> {
    const [email,setEmail] = useState("")
    const [ password,setPassword] = useState("")

    let handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/user/register', {
            method: 'POST',
            body: JSON.stringify({user: {email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((res) => res.json())
        .then((data) => props.updateToken(data.sessionToken))
        .catch(e => console.log(e))
    }
    return(
        <div>
        <h1>Register Here</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="text" onChange={(e)=>setEmail(e.target.value)} name='email' value={email}></Input>
            </FormGroup>
            <br/>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" onChange={(e)=> setPassword(e.target.value)} value={password}></Input>
            </FormGroup>
            <Button type="submit">Register</Button>
        </Form>
        </div>
    )
}

export default Register