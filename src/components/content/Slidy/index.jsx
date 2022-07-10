import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './style.css'
import slidy1 from './../../../assets/img/slidy-1.png'
import slidy2 from './../../../assets/img/slidy-2.png'
import slidy3 from './../../../assets/img/slidy-3.png'

function Slidy() {
  return (
    <div className='langh-slidy'>
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slidy1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className='title-el-h3'>First slide label</h3>
            <p className='sub-el-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slidy2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3 className='title-el-h3'>Second slide label</h3>
            <p className='sub-el-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slidy3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className='title-el-h3'>Third slide label</h3>
            <p className='sub-el-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Slidy;