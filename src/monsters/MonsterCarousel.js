import React, {useState, useEffect} from "react";
import {Button,Carousel, 
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption} from "reactstrap"
    



const MonsterTable2 = (props) =>{
const deleteMonster = (monster) => {
    // console.log(monsterId)

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
  

    // return (
    //   <Carousel
    //     activeIndex={activeIndex}
    //     next={next}
    //     previous={previous}
    //   >
    //     <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
    //     {slides}
    //     <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
    //     <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    //   </Carousel>
    // );

    








    // const slides = items.map((item) => {
    //     return (
    //       <CarouselItem
    //         onExiting={() => setAnimating(true)}
    //         onExited={() => setAnimating(false)}
    //         key={item.src}
    //       >
    //         <img src={item.src} alt={item.altText} />
    //         <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    //       </CarouselItem>
    //     );
    //   });
    



const slides = props.monsters.map((monster)=>{
        return(

                    <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={monster.id}>

            {/* <div><h1>Monster: {monster.creature} 
            <br/>
            {monster.image}</h1></div> */}
            <div className="slideDiv">
            <div className="upperDiv">
              {/* image and description */}
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
    <span id="font-test">
   

<Carousel className="mainDiv"
activeIndex={activeIndex}
next={next}
previous={previous}
>
<CarouselIndicators items={props.monsters} activeIndex={activeIndex} onClickHandler={goToIndex} />
{slides}
<CarouselControl direction="prev" onClickHandler={previous} />
<CarouselControl direction="next" onClickHandler={next} />
</Carousel>
    </span>
)
}
export default MonsterTable2;

