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
                          {/* <Image src={MapImg} fluid className='d-block m-auto pb-5 pb-sm-0'/> */}
                          <iframe className='d-block m-auto pb-5 pb-sm-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6415.518489392023!2d-118.4558098069012!3d34.152641854236506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c297cf906fac57%3A0x72641de88ff705c4!2sHappy%20Days%20Cafe!5e0!3m2!1sen!2sus!4v1701321205432!5m2!1sen!2sus" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                      <p>dbahappydayscafe@gmail.com</p>
                    </Col>


            </Row>
        </Container>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}