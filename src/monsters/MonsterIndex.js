import React, {useState, useEffect} from "react";
import MonsterTable2 from "./MonsterCarousel";
import MonsterTable from "./MonsterTable"
import APIURL from "../helpers/environment";


const MonsterIndex = (props) => {
    const [monsters, setMonsters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [monsterToUpdate, setMonsterToUpdate] = useState({});

    const fetchMonstersUrl = `${APIURL}/my-monsters/`
    


    const fetchMonsters = () => {
        fetch(fetchMonstersUrl, {
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
        <div className="mainDiv" >
        
            {props.createEdit ? <MonsterTable monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token} monsterToUpdate={monsterToUpdate} updateOff={updateOff} updateActive={updateActive} /> :<MonsterTable2 monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/>}
    
            
        </div>

    )
}

export default MonsterIndex;