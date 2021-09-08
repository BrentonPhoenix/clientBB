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
        }
  
    




    return(
        <div className="footerDiv">
        <footer>
            <Row>

            <Col md="6" id="colTwo">
                <Button onClick={flipFont}>Switch Font!</Button>
            </Col>
            <Col md="6" id="colOne">
                <p>&copy; Team 2, 2021</p>

               


                <p>Phoenix, Christian, Richard, Rhianna</p>

            </Col>

            </Row>
        </footer>
        </div>
    );
};

export default Footer;