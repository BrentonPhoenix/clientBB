import React, {useState, useEffect} from "react";
import MonsterCreate from "./MonsterCreate";
import MonsterTable from "./MonsterTable";
import MonsterEdit from "./MonsterEdit";

const MonsterIndex = (props) => {
    const [monsters, setMonsters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [monsterToUpdate, setMonsterToUpdate] = useState({});

    const fetchMonsters = () => {
        fetch("http://localhost:4000/", {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.token}`
            })
        }).then((res)=> res.json())
        .then((logData)=>{
            setMonsters(logData)
            console.log(logData)
        })
    }

    useEffect(() =>{
        fetchMonsters();
    }, [])

    const editUpdateMonster = (monster) => {
        setMonsterToUpdate(monster);
        console.log(monster);
    }

    const updateOn = () =>{
        setUpdateActive(true);
    }

    const updateOff = () =>{
        setUpdateActive(false);
    }

    return(
        <div>
            <MonsterCreate fetchMonsters={fetchMonsters} token={props.token}/>

            
            <MonsterTable monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/>
            
            {updateActive ? <MonsterEdit monsterToUpdate={monsterToUpdate} updateOff={updateOff} token={props.token} fetchMonsters=
            {fetchMonsters}/> : <></>}
        </div>

    )
}

export default MonsterIndex;