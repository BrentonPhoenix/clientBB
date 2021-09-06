import {Row, Col, Button} from 'reactstrap';

const Footer = () => {
    function changeStyle(){
    let bodyFont = document.getElementsByClassName('body')
    }


    return(
        <footer>
            <Row>
            <Col md="8" id="colTwo">
                <Button>Switch Font!</Button>
            </Col>
            <Col md="4" id="colOne">
                <p>&copy; Team 2, 2021</p>
                <p>Pheonix</p>
                <p>Christian</p>
                <p>Richard</p>
                <p>Rhianna</p>

            </Col>

               

            </Row>
        </footer>
    );
};

export default Footer;