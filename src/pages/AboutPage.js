import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap'
import Logo from "../assets/logo.png"

export default function About() {
  return (
    <div>
        
            <AppNavbar />
        

        <section >
            <div className='text-center bg-image d-flex justify-content-center' id='about-banner'>
                <div className='bg-image-text-container'>
                <div className='bg-image-text-bg mx-auto'>
                    <h1><span>FAQ</span></h1>
                </div>
                </div>
            </div>        
        </section>


        <Container>
            <div className=''>
            {/* <img
              src={Logo}
              width="250"
              height="250"
              className="m-auto d-block"
              alt="Logo"
            /> */}
                {/* <Row>
                    <Col>
                        <div className='mx-auto mt-3 mb-5 text-center'>
                            <div className="w-75 mx-auto">
                                <p>Happy Days Café, a family-owned business, specializes in coffee, churros, and desserts using freshly roasted beans from LAMILL coffee. Our quality lattés and specialty drinks, such as the horchata latte and iced minty coffee, are a must-try. Indulge in made-to-order churros with various options, including gluten-free and vegan. Whether sugared, dipped in homemade hot chocolate, stuffed with dulce de leche, or paired with ice cream, they're a delight. Enjoy indoor and outdoor seating for a perfect date night or hangout.</p>
                            </div>
                        </div>
                    </Col>
                </Row> */}
                <h1 className='text-center py-3'>Frequently Asked Questions</h1><br></br>
                <Row>
                    <Col>
                        <div className='mx-auto text-center'>
                            <div className="w-75 mx-auto">
                                <h3>Which Dessert Items Are Vegan?</h3>
                                <p>Please be aware that only items marked with (V) are vegan-friendly. While the churros themselves are vegan, the addition of specific fillings and ice cream will make the item non-vegan. Additionally, both churro waffles and crepes include eggs and butter in their ingredients.</p>
                                
                                <h3>What is Available in Gluten Free?</h3>
                                <p>Churro waffles are gluten-free. Both plain and stuffed churros can be made with a rice flour base, but please note that they will be prepared in the same oil used for the wheat-based churros.</p>
                                
                                <h3>Is Parking Available?</h3>
                                <p>Parking is available at the back for your convenience.</p>
                                
                                <h3>Is catering available for events and gatherings?</h3>
                                <p>Catering services are available for your events and gatherings.</p>
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