import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import MapImg from '../assets/map.webp'


export default function ContactPage() {
  return (
    <div>
        
          <AppNavbar />
        

        <section >
            <div className='text-center bg-image d-flex justify-content-center' id='contact-banner'>
                <div className='bg-image-text-container'>
                <div className='bg-image-text-bg mx-auto'>
                    <h1><span>CONTACT US</span></h1>
                </div>
                </div>
            </div>        
        </section>

        <Container className='px-5 px-sm-0'>
            <Row className='py-5'>
              

              <Col xs={12} sm={6} md={6} lg={6} className=''>
                      <div>
                          <Image src={MapImg} fluid className='d-block m-auto pb-5 pb-sm-0'/>
                      </div>
                    </Col>

                    {/* <Col lg={12} xl={4} className='px-5 pt-4'>

                    <Form>
                      <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Button variant="dark">Submit</Button>
                    </Form>

                    </Col> */}
                    <Col xs={12} sm={6} md={6} lg={6} className="px-3 px-sm-3">
                      <p>14552 Ventura Blvd Los Angeles, CA 91403</p>
                      <p>Monday - Thursday : 2pm - 12am</p>
                      <p>Friday - Sunday  : 12pm-12am</p>
                      <p>+1 (818) 809-2554</p>
                      <p>ferialnasseri@yahoo.com</p>
                    </Col>


            </Row>
        </Container>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}