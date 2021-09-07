import {Row, Col, Button} from 'reactstrap';
import { useState } from 'react';
import '../App.css'

const Footer = () => {

    let [font,setFont] = useState(true)
    let flipFont = ()=>{
        
        if(font){
            document.getElementById('fontFlip').style.fontFamily = 'Open Sans';
            setFont(!font)
        } else {
            document.getElementById('fontFlip').style.fontFamily = 'MedievalSharp';
            setFont(!font)
        }
        // setFont(!font)
        }
  
    




    return(
        <div className="footerDiv">
        <footer>
            <Row>

            <Col md="8" id="colTwo">
                {/* {font ? document.getElementsByTagName('body').style.fontFamily = "'Open Sans', sans-serif" : document.getElementsByTagName('body').style.fontFamily = "'MedievalSharp', cursive"} */}
                <Button onClick={flipFont}>Switch Font!</Button>
            </Col>
            <Col md="4" id="colOne">
                <p>&copy; Team 2, 2021</p>

               

                <p>Pheonix-Christian-Richard-Rhianna</p>
                {/* <p>Christian</p>
                <p>Richard</p>
                <p>Rhianna</p> */}

            </Col>

            </Row>
        </footer>
        </div>
    );
};

export default Footer;