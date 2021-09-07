import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const MonsterCreate = (props) => {
    const [creature, setCreature] = useState('');
    const [image, setImage] = useState('https://images.unsplash.com/photo-1554727225-ee66ff0a1bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80');
    const [campaign, setCampaign] = useState('');
    const [hitpoints, setHitpoints] = useState('');
    const [armorclass, setArmorclass] = useState('');
    const [speed, setSpeed] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/my-monsters/create', {
            method: 'POST',
            body: JSON.stringify({monster: {creature: creature, image: image, campaign: campaign, hitpoints: hitpoints, armorclass: armorclass, speed: speed, rating: rating, description: description}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => res.json())
        .then((monsterData) => {
            console.log(monsterData);
            setCreature('');
            setImage('https://images.unsplash.com/photo-1554727225-ee66ff0a1bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80');
            setCampaign('');
            setHitpoints('');
            setArmorclass('');
            setSpeed('');
            setRating('');
            setDescription('');
            props.fetchMonsters();
        })
    }

    return(
        <>
        <h3>Create a Monster!</h3>
        <br />
        <Form className="divCreate" onSubmit={handleSubmit}>
            <FormGroup>
                <Label className="text" htmlFor="creature">Creature:</Label>
                <Input name="creature" value={creature} onChange={(e) => setCreature(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label className="text" htmlFor="image">Image:</Label>
                <Input name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label className="text" className="text" htmlFor="campaign">Campaign:</Label>
                <Input name="campaign" value={campaign} onChange={(e) => setCampaign(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label className="text" className="text" htmlFor="hitpoints">Hitpoints:</Label>
                <Input name="hitpoints" value={hitpoints} onChange={(e) => setHitpoints(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label className="text" className="text" htmlFor="armorclass">Armor Class:</Label>
                <Input name="armorclass" value={armorclass} onChange={(e) => setArmorclass(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label className="text" className="text" htmlFor="speed">Speed:</Label>
                <Input name="speed" value={speed} onChange={(e) => setSpeed(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label className="text" htmlFor="rating">Rating:</Label>
                <Input name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
            </FormGroup>
            <FormGroup>

                <Label htmlFor="description">Description:</Label>
                <Input type="textarea" maxLength="300" value={description} onChange={(e) => setDescription(e.target.value)}/>&nbsp; &nbsp;

            </FormGroup>
            <Button color="success" type="submit">Click to Create</Button>
        </Form>
        </>
    )
}

export default MonsterCreate;