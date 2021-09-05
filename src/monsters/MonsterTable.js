import React from "react";
import {Button} from "reactstrap"


const MonsterTable = (props) =>{
const deleteMonster = (monster) => {
    // console.log(monster)

    const deleteMonsterUrl = `http://localhost:4000/my-monsters/delete/${monster.Id}`;
    // const accessToken = localStorage.getItem('sessionToken')

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
    return props.monsters.map((monster, index)=>{
        return(
            <div>
                {/* Do we need this key? */}
                key={index}
                {monster.id}
                {monster.creature}
                {monster.image}
                <Button color="primary" onClick={()=> {props.editUpdateMonster(monster); props.updateOn()}}>Update Monster</Button>
                <Button color="secondary" onClick={()=> {deleteMonster(monster)}}>Delete Monster</Button>
            </div>

        )
    })
}

return(
    <>
    <h2>My Monsters</h2>
    <hr/>
    <h3>Monster Name</h3>
    <h4>img link</h4>
    {monsterMapper()}
    </>
)
}
export default MonsterTable;

