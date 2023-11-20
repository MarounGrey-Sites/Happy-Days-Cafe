import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <div>
        
            <AppNavbar />
        

        <section >
            <div className='text-center bg-image d-flex justify-content-center' id='about-banner'>
                <div className='bg-image-text-container'>
                <div className='bg-image-text-bg mx-auto'>
                    <h1><span>ABOUT</span></h1>
                </div>
                </div>
            </div>        
        </section>

        <Container>
            {/* Quote */}
            <div className='my-1'>
                <Row>
                    <Col>
                        <div className='mx-auto my-5 text-center'>
                            <div className="w-75 mx-auto">
                                <p>Happy Days Café, a family-owned business, specializes in coffee, churros, and desserts using freshly roasted beans from LAMILL coffee. Our quality lattés and specialty drinks, such as the horchata latte and iced minty coffee, are a must-try. Indulge in made-to-order churros with various options, including gluten-free and vegan. Whether sugared, dipped in homemade hot chocolate, stuffed with dulce de leche, or paired with ice cream, they're a delight. Enjoy indoor and outdoor seating for a perfect date night or hangout.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

        <footer>
          <AppFooter />
        </footer>
    </div>
  )
}