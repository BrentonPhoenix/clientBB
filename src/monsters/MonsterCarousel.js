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




const items = [
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
 ];
  
  
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
            key={items.id}>
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
    <>
    <h2>My Monsters</h2>
    <hr/>
    {/* <h3>Monster Name</h3> */}
    {/* <h4>img link</h4> */}
    {/* {monsterMapper()} */}

<Carousel className="mainDiv"
activeIndex={activeIndex}
// next={next}
// previous={previous}
>
<CarouselIndicators items={props.monsters} activeIndex={activeIndex} onClickHandler={goToIndex} />
{slides}
<CarouselControl direction="<" directionText="<" onClickHandler={previous} />
<CarouselControl direction=">" directionText=">" onClickHandler={next} />
</Carousel>
    </>
)
}
export default MonsterTable2;

