import MonsterCreate from "./MonsterCreate";
import React from "react";
import {Button, List, } from "reactstrap"
import MonsterEdit from "./MonsterEdit";
import APIURL from "../helpers/environment";

const MonsterTable = (props) =>{
const deleteMonster = (monster) => {



    const deleteMonsterUrl = `${APIURL}/my-monsters/delete/${monster.id}`;


    fetch(deleteMonsterUrl, {
        method: 'DELETE',
        headers: new Headers ({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${props.token}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        {props.fetchMonsters()};
    })
    .catch(err => console.log(err))
}

const monsterMapper = () =>{
    return props.monsters.map((monster)=>{
        return(
            <List className="divCreate" type="unstyled">
                <br />
                <ul>
                    <li className="monster">Monster Name:  {monster.creature}</li> &nbsp; 
                    <ul>
                        <li className="hp">HP: </li>
                            <ul>
                            <li>{monster.hitpoints}</li>
                            </ul>
                        <li className="ac">AC: </li>
                            <ul>
                            <li>{monster.armorclass}</li>
                            </ul>
                        <li className="speed">Speed: </li>
                            <ul>
                            <li>{monster.speed}</li>
                            </ul>
                        <li className="rating">Rating: </li>
                            <ul>
                            <li>{monster.rating}</li>
                            </ul>
                        <li className="description">Description: </li>
                            <ul>
                            <li>{monster.description}</li>
                            </ul>
                        &nbsp; &nbsp;
                    </ul>    
                    
                </ul>
                
                <Button color="primary" size="sm" onClick={()=> {props.editUpdateMonster(monster); props.updateOn()}}>Update Monster</Button> &nbsp; &nbsp; &nbsp;
                <Button color="danger" size="sm" onClick={()=> {deleteMonster(monster)}}>Delete Monster</Button>
                <br />
            </List>

        )
    })
}

return(
    <div>
        <MonsterCreate token={props.token} fetchMonsters={props.fetchMonsters}/>
        {props.updateActive ? <MonsterEdit monsters={props.monsters} editUpdateMonster={props.editUpdateMonster} updateOn={props.updateOn} fetchMonsters={props.fetchMonsters} token={props.token} monsterToUpdate={props.monsterToUpdate} updateOff={props.updateOff} updateActive={props.updateActive} /> : <></>}
        &nbsp; &nbsp;
    <h2>My Monsters</h2>
    <hr/>
    {monsterMapper()}
    </div>
)
}

export default MonsterTable;
