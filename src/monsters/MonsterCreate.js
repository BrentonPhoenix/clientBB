import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const MonsterCreate = (props) => {
    const [creature, setCreature] = useState('');
    const [image, setImage] = useState('');
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
            body: JSON.stringify({log: {creature: creature, image: image, campaign: campaign, hitpoints: hitpoints, armorclass: armorclass, speed: speed, rating: rating, description: description}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => res.json())
        .then((monsterData) => {
            console.log(monsterData);
            setCreature('');
            setImage('');
            setCampaign('');
            setHitpoints('');
            setArmorclass('');
            setSpeed('');
            setRating('');
            setDescription('');
            props.fetchWorkouts();
        })
    }

    return(
        <>
        <h3>Create a Monster!</h3>
        <br />
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="creature">Creature:</Label>
                <Input name="creature" value={creature} onChange={(e) => setCreature(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="image">Image:</Label>
                <Input name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="campaign">Campaign:</Label>
                <Input name="campaign" value={campaign} onChange={(e) => setCampaign(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="hitpoints">Hitpoints:</Label>
                <Input name="hitpoints" value={hitpoints} onChange={(e) => setHitpoints(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="armorclass">Armor Class:</Label>
                <Input name="armorclass" value={armorclass} onChange={(e) => setArmorclass(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="speed">Speed:</Label>
                <Input name="speed" value={speed} onChange={(e) => setSpeed(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="rating">Rating:</Label>
                <Input name="rating" value={} onChange={(e) => setRating(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description">Description:</Label>
                <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to Create</Button>
        </Form>
        </>
    )
}

export default MonsterCreate;