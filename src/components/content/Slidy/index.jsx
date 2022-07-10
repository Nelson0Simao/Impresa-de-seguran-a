import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slidy1 from '/home/SrRoot/Documents/gitClone/impresa-de-seguranca/src/assets/img/slidy-1.png'
import slidy2 from '/home/SrRoot/Documents/gitClone/impresa-de-seguranca/src/assets/img/slidy-2.png'
import slidy3 from '/home/SrRoot/Documents/gitClone/impresa-de-seguranca/src/assets/img/slidy-3.png'

function Slidy() {
  return (
    <>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slidy1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slidy2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slidy3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Slidy;