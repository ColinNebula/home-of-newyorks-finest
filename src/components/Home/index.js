import React, { useState } from 'react'
import { Card, Container, NavDropdown, Button, Col, Row, Modal } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


// import CardGroup from 'react-bootstrap/CardGroup';

export const Home = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <Container fluid>
        <Row>
        <div>
        <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            What we do
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Nibh cras pulvinar mattis nunc. Mollis aliquam ut porttitor leo a. 
          Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. 
          Volutpat diam ut venenatis tellus in metus vulputate.

          </p>
          <Card.Img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Froutenote.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F09%2FDJ.jpg&f=1&nofb=1&ipt=ddb0176cf1104a4d07576f128b48c3797be67004d74087a891a247c025d50dfa&ipo=images/100px270" className="rounded" alt="Card image" />
          <a href="https://react-bootstrap.github.io/components/modal/"></a>
        
        </Modal.Body>
      </Modal>
    </>
        </div>
        <h2 class="body_title"> Welcome to Home of New Yorks finest.</h2>
        <NavDropdown.Divider />
        <p class="top-p">Your one stop for quality images in NYC. 
          We will show up at your events ready to document every moment.
        </p>
          <Col ms={"auto"}>
          <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
      <Card.Img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Froutenote.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F09%2FDJ.jpg&f=1&nofb=1&ipt=ddb0176cf1104a4d07576f128b48c3797be67004d74087a891a247c025d50dfa&ipo=images/100px270" className="rounded" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Party In NYC</Card.Title>
        <Card.Text>
          Party with the best of the best DJs in the city. Follow us on social media for the latest music and hottest artist around New York City.
        </Card.Text>
        <Button variant="outline-primary" onClick={() => setLgShow(true)}>Read more</Button>{' '}
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

    <h2 class="middle_title"> Here something else.</h2>
    <p class="mid-p">Your one stop for quality images in NYC. We will show up at your events ready to document every moment.</p>
    
    <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: 'auto' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Card.Footer>
        <Button variant="outline-primary" onClick={() => setLgShow(true)}>More information</Button>{' '}
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  <br />
  <NavDropdown.Divider />
  <Container fluid>
  <Row>
  <Col className="icons">
  <div>
  <SocialIcon url="https://youtube.com/" network="youtube"  />

  <SocialIcon url="https://www.linkedin.com/in/" network="linkedin" />

  <SocialIcon url="mailto:colinnebula@gmail.com" network="mailto" bgColor="#ff5a01" />
  </div>
    </Col>

    
    </Row>
</Container>
</Container>
  );
}

export default Home;