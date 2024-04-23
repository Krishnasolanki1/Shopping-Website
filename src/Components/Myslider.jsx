import Carousel from 'react-bootstrap/Carousel';


function Myslider() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cd7772dcad0158e8.jpg?q=20"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/440bf37588e0418e.png?q=20"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b2132b52f8b2c7dd.jpg?q=20"
          alt="First slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Myslider;