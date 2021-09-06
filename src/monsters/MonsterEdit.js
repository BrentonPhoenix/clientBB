import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const MonsterEdit = (props) => {
    const[editcreature, setEditCreature] = useState(props.monsterToUpdate.creature);
    const[editimage, setEditImage] = useState(props.monsterToUpdate.image);
    const[editcampaign, setEditCampaign] = useState(props.monsterToUpdate.campaign);
    const[edithitpoints, setEditHitpoints] = useState(props.monsterToUpdate.hitpoints);
    const[editarmorclass, setEditArmorclass] = useState(props.monsterToUpdate.armorclass);
    const[editspeed, setEditSpeed] = useState(props.monsterToUpdate.speed);
    const[editrating, setEditRating] = useState(props.monsterToUpdate.rating);
    const[editdescription, setEditDesc] = useState(props.monsterToUpdate.description);
    


    const monsterUpdate = (event, monster) => {
        event.preventDefault();
        fetch(`http://localhost:4000/my-monsters/update/${props.monsterToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({monster: {creature: editcreature, image: editimage, campaign: editcampaign, hitpoints: edithitpoints, armorclass: editarmorclass, speed: editspeed, rating: editrating, description: editdescription}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            props.fetchMonsters();
            props.updateOff();
        })
    }
    
    
    return(
        <Modal isOpen={true}>
            <ModalHeader> Update a Creature!</ModalHeader>
                <ModalBody>
                   
                    <Form onSubmit={monsterUpdate}>
                        <FormGroup>
                            <Label htmlFor="creature">Edit Creature:</Label>

                            <Input name="creature" value={editcreature} onChange={(e) => setEditCreature(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="image">Edit Image</Label>
                            <Input name="image" value={editimage} onChange={(e) => setEditImage(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="campaign">Edit Campaign:</Label>
                            <Input name="campaign" value={editcampaign} onChange={(e) => setEditCampaign(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="hitpoints">Edit Hitpoints:</Label>
                            <Input name="hitpoints" value={edithitpoints} onChange={(e) => setEditHitpoints(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="armorclass">Edit Armor Class:</Label>
                            <Input name="armorclass" value={editarmorclass} onChange={(e) => setEditArmorclass(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="speed">Edit Speed:</Label>
                            <Input name="speed" value={editspeed} onChange={(e) => setEditSpeed(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="rating">Edit Rating:</Label>
                            <Input name="rating" value={editrating} onChange={(e) => setEditRating(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Edit Description:</Label>
                            <Input name="description" value={editdescription} onChange={(e) => setEditDesc(e.target.value)}/>

                        </FormGroup>
                    <Button type="submit">Update Monster!</Button>
                    <br/>
                    <br/>
                    <Button  type="submit">Cancel</Button>
                    {/* What exactly do we want? */}
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default MonsterEdit;