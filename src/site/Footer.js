import {Row, Col, Button} from 'reactstrap';

const Footer = () => {
    function changeStyle(){
    let bodyFont = document.getElementsByClassName('body')
    }


    return(
        <footer>
            <Row>
            <Col md="10" id="colTwo">
                <Button>Switch Font!</Button>
            </Col>
            <Col md="2" id="colOne">
                <p>&copy; Team 2, 2021</p>
            </Col>
            </Row>
        </footer>
    );
};

export default Footer;