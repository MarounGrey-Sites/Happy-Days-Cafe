import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

export default function Gallery() {
  return (
    <section>
        <Container className='pt-5 line-border'>
            <Row>
                <Col xs={12} lg={4} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-1.webp')} fluid/>
                </Col>
                <Col xs={12} lg={4} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-6.webp')} fluid/>
                </Col>
                <Col xs={12} lg={4} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-5.webp')} fluid/>
                </Col>

            </Row>
            <Row>
                <Col xs={12} lg={4} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-2.webp')} fluid/>
                </Col>
                <Col xs={12} lg={4} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-3.webp')} fluid/>
                </Col>
                <Col xs={12} lg={4} className="p-0 d-flex justify-content-center">
                    <Image src={require('../../assets/gal-4.webp')} fluid/>
                </Col>
            </Row>
            
        </Container>             
    </section>
  )
}
