import React from 'react'
import { Card, Container, Button, Col, Row } from 'react-bootstrap';
import { store } from 'react-notifications-component';

// import CardGroup from 'react-bootstrap/CardGroup';

export const Home = () => {
  const handleOnClick = () => {
    store.addNotification({
      title: "New Card Added",
      Message: "checkout the hottest parties!",
      type: "info",
      container: "top-right",
      insert: "top"

    })
  }
  return (
    <Container fluid>
        <Row>
        <h2 class="body_title"> Welcome to Home of New Yorks finest.</h2>
          <Col ms={"auto"}>
          <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: "auto" }}>
      <Card.Img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Froutenote.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F09%2FDJ.jpg&f=1&nofb=1&ipt=ddb0176cf1104a4d07576f128b48c3797be67004d74087a891a247c025d50dfa&ipo=images/100px270" className="rounded" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Party In NYC</Card.Title>
        <Card.Text>
          Party with the best of the best DJs in the city. Follow us on social media for the latest music and hottest artist around new york.
        </Card.Text>
        <Button variant="outline-primary" onClick={() => 'events'}>Go to events</Button>{' '}
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

    <h2 class="middle_title"> Here something else.</h2>
    
    <Card className="bg-dark text-white shadow-lg" style={{ color: "#000", width: 'auto' }}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Card.Footer>
        <Button variant="outline-primary" onClick={handleOnClick}>More information</Button>{' '}
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card.Body>
  </Card>
    </Col>

    
    </Row>
</Container>
  );
}

export default Home;