import React, {useState, useEffect, ImageBackground} from "react";
import MonsterCreate from "./MonsterCreate";
import MonsterTable2 from "./MonsterCarousel";
import MonsterEdit from "./MonsterEdit";
import MonsterTable from "./MonsterTable"


const MonsterIndex = (props) => {
    const [monsters, setMonsters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [monsterToUpdate, setMonsterToUpdate] = useState({});
    const fetchMonstersUrl = "http://localhost:4000/my-monsters/"



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
            {/* <div className="overlay" style={{background: `url(${BackgroundImage})`, backgroundRepeat: 'no-repeat', width: '250px' }}> */}
                
            {/* </div> */}
            

            <MonsterTable2 monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/>

            
            {updateActive ? <MonsterEdit monsterToUpdate={monsterToUpdate} updateOff={updateOff} token={props.token} fetchMonsters=
            {fetchMonsters}/> : <></>}
            <MonsterCreate fetchMonsters={fetchMonsters} token={props.token}/>
            <MonsterTable monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/>
        </div>

    )
}

export default MonsterIndex;

            {/* <MonsterCaro monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/> */}
            // <MonsterTable monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/>


            // {/* <MonsterCaro monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/> */}
            // <MonsterTable monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/>





            // {/* <MonsterCaro monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/> */}
            // <MonsterTable monsters={monsters} editUpdateMonster={editUpdateMonster} updateOn={updateOn} fetchMonsters={fetchMonsters} token={props.token}/>

