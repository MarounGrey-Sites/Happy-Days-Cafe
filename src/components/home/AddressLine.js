import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AddressLine() {
  return (
    <section>
        <Container>
            <Row className="py-4">
                <Col className="text-center"><span className='pe-5 address-lane'><i className="fa-solid fa-location-dot p-1"></i>14552 Ventura Blvd Los Angeles, CA 91403</span><span className='px-5 address-lane'><i class="fa fa-phone" aria-hidden="true"></i> (818) 809-2554</span></Col>
            </Row>
        </Container>
    </section>
  )
}
