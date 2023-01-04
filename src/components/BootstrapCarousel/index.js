import Carousel from 'react-bootstrap/Carousel';
// import Fade from 'react-bootstrap/Fade'

function Navigation() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mi.edu%2Fwp-content%2Fuploads%2F2018%2F11%2FDJ-Equipment-for-Beginners.jpg&f=1&nofb=1&ipt=45e7a9e4d03ce84c30fe3355787a01e2feb860cb8f1f6c05ed632ddcf3a4ceb7&ipo=images"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000" 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdjextreme.com%2Fwp-content%2Fuploads%2F2016%2F04%2F2016-03-11-20.15.49.jpg&f=1&nofb=1&ipt=7125a9247d27092bfa142dac323b3f9073f0c3ae8c963951374322defddaf700&ipo=images"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Ready To get down</h3>
          <p>Live DJ, with top of the line equipment at every event. You will not be disappointed.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 carousel-fade" data-bs-interval="10000"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2927194.jpg&f=1&nofb=1&ipt=d1caa3555822113041ca6d8deb8d4e0d172b7bddc12bb8b33789e878e315b3ed&ipo=images"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Party Like A Rockstar</h3>
          <p>
            Do not miss out on the best parties and events around the city. We got you covered.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Navigation;