import React, { useState } from 'react'
import { Card, CardGroup, Button, Modal, NavDropdown, Container, Row, Col  } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export const Events = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>

    <h2 class='events'>
    Our events are best in the New York city. 
    
    </h2>
    <p className="events-p">
    Stay in the know, and get frequently updated. 
    </p>
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
          <a src href="https://react-bootstrap.github.io/components/modal/"> This link to youtube</a>
          <Card.Img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Froutenote.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F09%2FDJ.jpg&f=1&nofb=1&ipt=ddb0176cf1104a4d07576f128b48c3797be67004d74087a891a247c025d50dfa&ipo=images/100px270" className="rounded" alt="Card image" />
          
        
        </Modal.Body>
      </Modal>
    </>
    <Container fluid>
    <CardGroup fluid>
      <Card className="bg-dark text-white shadow-md" style={{ width: '25rem'}}>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.P5UtNzsLOx4lz8tdvlaMmgHaEo%26pid%3DApi&f=1&ipt=db6d42ef7d8b44396b6e17e37cbb061464a1c0f42bc3f8838703dbb5ba2f0d94&ipo=images/100px160" />
        <Card.Body>
          <Card.Title>Events around New York City</Card.Title>
          <Card.Text>
          
            When it comes to parting in new york city, the venue matters. 
            Let us take care of your party needs. We will make sure you are at the hottest party in your area. 
          
            <uL>
            <li>This we do.</li>
            <li>And that.</li>
            <li>Cabs, taxi, and Uber available..</li>
          </uL>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-primary" onClick={() => setLgShow(true)}>Learn more</Button>{' '}
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="bg-dark text-white shadow-md" style={{ width: '25rem'}}>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._VI46jRLNWXLENUMZK7hngHaEK%26pid%3DApi&f=1&ipt=ed51018b1e2cc452afc9a72794cc7b4638a9849361f557d9e33d0c02a6372b13&ipo=images/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
            <uL>
            <li>This we do.</li>
            <li>And that.</li>
            <li>kkhfdkjkg skfhk</li>
          </uL>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-primary" onClick={() => setLgShow(true)}>Learn more</Button>{' '}
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card className="bg-dark text-white shadow-md" style={{ width: '25rem'}}>
        <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.o5wwrXh0AgXB1azwhiQDywHaE8%26pid%3DApi&f=1&ipt=07486462958a83e05358d49982ffeacc487819b473b2d1190866c64cd66bb45d&ipo=images/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content 
            <uL>
            <li>This we do.</li>
            <li>And that.</li>
            <li>Also we do this here.</li>
          </uL>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-primary" onClick={() => setLgShow(true)}>Learn more</Button>{' '}
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <NavDropdown.Divider />
  <Container fluid>
  <Row>
  <Col className="icons">
  <div>
  <br />
  <SocialIcon url="https://youtube.com/" network="youtube"  />

  <SocialIcon url="https://www.linkedin.com/in/" network="linkedin" />

  <SocialIcon url="mailto:colinnebula@gmail.com" network="mailto" bgColor="#ff5a01" />
  </div>
    </Col>

    
    </Row>
</Container>
</Container>
    </div>
    
  )
}

export default Events;