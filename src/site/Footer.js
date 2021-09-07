import {Row, Col, Button} from 'reactstrap';

const Footer = () => {
    function changeStyle(){
    let bodyFont = document.getElementsByClassName('body')
    }


    return(
        <div className="footerDiv">
        <footer>
            <Row>
            <Col md="6" id="colTwo">
                <Button>Switch Font!</Button>
            </Col>
            <Col md="6" id="colOne">
                <p>&copy; Team 2, 2021<br/>
                Phoenix - Christian - Richard - Rhianna</p>

            </Col>
            </Row>
        </footer>
        </div>
    );
};

export default Footer;