import MonsterCreate from "./MonsterCreate";
import React from "react";
import {Button, List, } from "reactstrap"
import MonsterEdit from "./MonsterEdit";

const MonsterTable = (props) =>{
const deleteMonster = (monster) => {



    const deleteMonsterUrl = `http://localhost:4000/my-monsters/delete/${monster.id}`;
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
            <List type="unstyled">
                <br />
                {/* Do we need this key? */}
                {/* key={index} */}
                <ul>
                    {/* <li>{monster.id}</li> */}
                    {/* <Text style={{fontWeight: "bold"}}></Text> */}
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
                        <li className="url">Monster Image URL:  </li>
                            <ul>
                            <li>{monster.image}</li>
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
        <MonsterCreate/>

        &nbsp; &nbsp;
    <h2>My Monsters</h2>
    <hr/>
    {monsterMapper()}
    </div>
)
}

export default MonsterTable;

// import React from "react";
// import {Button} from "reactstrap"


// const MonsterTable = (props) =>{
// const deleteMonster = (monster) => {
//     // console.log(monsterId)

//     const deleteMonsterUrl = `http://localhost:4000/my-monsters/delete/${monster.id}`;
//     // const accessToken = localStorage.getItem('sessionToken')

//     fetch(deleteMonsterUrl, {
//         method: 'DELETE',
//         headers: new Headers ({
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${props.token}`
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         {props.fetchMonsters()};
//     })
//     .catch(err => console.log(err))
// }

// const monsterMapper = () =>{
//     return props.monsters.map((monster, index)=>{
//         return(
//             <div>
//                 {/* Do we need this key? */}
//                 key={index}
//                 {monster.id}
//                 {monster.creature}
//                 {monster.image}
//                 <Button color="#03FE2A" onClick={()=> {props.editUpdateMonster(monster); props.updateOn()}}>Update Monster</Button>
//                 <Button color="#193A73" onClick={()=> {deleteMonster(monster)}}>Delete Monster</Button>
//             </div>

//         )
//     })
// }

// return(
//     <>
//     <h2>My Monsters</h2>
//     <hr/>
//     <h3>Monster Name</h3>
//     <h4>img link</h4>
//     {monsterMapper()}
//     </>
// )
// }


