import React, {useState} from "react";
import {Carousel, 
    CarouselItem,
    CarouselControl,
    CarouselIndicators} from "reactstrap"
    // import APIURL from "../helpers/environment";
    



const MonsterTable2 = (props) =>{
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === props.monsters.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? props.monsters.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }


const slides = props.monsters.map((monster)=>{
        return(

                    <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={monster.id}>

            <div className="slideDiv">
            <div className="upperDiv">
              <div className="monsterImage">
                <img src={monster.image} className="img-fluid"/>
              </div>
              <div className="monsterDescription">
                <h3>Description</h3>
                <br/>
                <p>{monster.description}</p>
              </div>
            </div>
            <div className="info">
              <ul>
                <li>Name: {monster.creature}</li>
                  <li>ID: {monster.id}</li>
                  <li>Campaign: {monster.campaign}</li>
                  <li>HP: {monster.hitpoints}</li>
                  <li>AC: {monster.armorclass}</li>
                  <li>Speed: {monster.speed}</li>
                  <li>Rating: {monster.rating}</li>
      
              </ul>
            </div>
           </div>

          </CarouselItem>
           

        )
    })


return(
<div id="font-test">
   

<Carousel className="mainDiv"activeIndex={activeIndex}>
  <CarouselIndicators items={props.monsters} activeIndex={activeIndex} onClickHandler={goToIndex} />
    {slides}
  <CarouselControl direction="prev" onClickHandler={previous} />
  <CarouselControl direction="next" onClickHandler={next} />
</Carousel>
</div>

)
}
export default MonsterTable2;

