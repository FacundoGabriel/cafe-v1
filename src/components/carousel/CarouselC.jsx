import Carousel from "react-bootstrap/Carousel";
import './CarouselC.css'

export const CarouselC = () => {
  return (
    <>

      <Carousel className="carousel">
        <Carousel.Item>
          <img src="/img/carousel_1.jpg" className="img-fluid img-carousel" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/carousel_2.jpg" className="img-fluid img-carousel" alt="Second slide" />
      
        </Carousel.Item>
        <Carousel.Item>
          <img src="img/carousel_3.jpg" className="img-fluid img-carousel" alt="Third slide" />
        </Carousel.Item>
      </Carousel>


    </>
  );
};
