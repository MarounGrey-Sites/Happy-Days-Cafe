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
                    <h1><span>About</span></h1>
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
                <h1 className='text-center pt-5'>About Us</h1>
                <Row>
                    <Col>
                        <div className='mx-auto mt-3 mb-5 text-center'>
                            <div className="w-75 mx-auto">
                                <p>At Happy Days Café, we believe that quality ingredients make for quality dining experiences. As a women-owned café specializing in coffee, churros, and desserts, we aim to serve each customer food and drink that brings a smile to their face.</p>
                                <p>We use freshly roasted beans from LAMILL coffee to provide quality lattés and specialty coffee drinks. For those with a sweet tooth, our churros take center stage. We make our churros fresh to order from scratch, offering them simply sugared or amped up with dipping sauces like our thick homemade hot chocolate. Feel free to stuff them with dulce de leche, guava, oreo or nutella!</p>
                                <p>We also take care to provide options for all diets. In addition to our everyday vegetarian, vegan, and gluten-free menu items, we whip up specialty dishes so that everyone can participate in the Happy Days experience.</p>
                                <p>Whether you need a caffeine fix, a sweet treat, or just a comfortable spot to meet friends, Happy Days Café aims to be your neighborhood destination for breaks both big and small. Our indoor and outdoor seating welcomes you to sit back and let the smells of fresh churros and coffee envelop you like a hug. We can’t wait to see you!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <h1 className='text-center py-3'>Frequently Asked Questions</h1><br></br>
                <Row>
                    <Col>
                        <div className='mx-auto text-left'>
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