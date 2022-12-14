import React, { useState } from 'react'
import { Card, CardGroup, Button, Modal, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
export const Videos = () => {
  const [lgShow, setLgShow] = useState(false);
  return (

    <div>
    <h2 class="videos">
    Come see our Videos featureing some of NYCs best djs.
    </h2>
    <div>
    <>

      <Modal
      size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
    </div>
    <Container fluid>
    <CardGroup>
    <Card className="bg-dark text-white" style={{ width: '25rem'}}>
      <Card.Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6-xXvJxQYy7IQi8g6mqcQgHaEK%26pid%3DApi&f=1&ipt=cc7d54d75a6793aee31e4cefe4145e9cc92bac1fbe847a1b95966e0dade2e5e5&ipo=images/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Button variant="outline-primary" onClick={() => setLgShow(true)}>Watch here</Button>{' '}
        <Card.Text>Another amazing night with DJ</Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white" style={{ width: '25rem'}}>
      <Card.Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VGUBIxF94yIlwZpMDTjRRgHaD6%26pid%3DApi&f=1&ipt=eefbfde08cdca35270684fef7eef656f8d957bed3df3582248b383f3254c6871&ipo=images/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Button variant="outline-primary" onClick={() => setLgShow(true)}>Watch here</Button>{' '}
        <Card.Text>Unforgetable night with DJ</Card.Text>
      </Card.ImgOverlay>
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

export default Videos;