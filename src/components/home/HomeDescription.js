import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export default function HomeDescription() {
  return (
    <section>
    <Container className='py-5'>
        <Row className='text-center py-2'>
            <h1>Churros, Desserts, Coffee</h1>
            <p>Nestled in the heart of Sherman Oaks, Los Angeles, Happy Days Cafe welcomes you to a warm and inviting haven. As a cherished women-owned business and a beloved family establishment, we take pride in offering a diverse menu that caters to various dietary preferences, including gluten-free and vegan options. Indulge in the rich aroma of our specialty coffee, expertly brewed to perfection, and our mouthwatering churros, a crispy and sweet delight that has become a local favorite.

Conveniently located, we offer parking in the back, making your visit hassle-free. Additionally, as the only cafe open till midnight in the area, Happy Days Cafe provides the perfect setting for a cozy coffee ritual, delightful dates, quiet studying corners, or comfortable meeting atmospheres. And don't forget, we also offer catering services to bring our delicious offerings to your special events.</p>
        </Row>

        <Row className='text-center py-2'>
            <Col className='description-icons'>
            <img width="50" height="50" src="https://img.icons8.com/glyph-neue/64/espresso-cup.png" alt="espresso-cup"/>
                 <h5>Coffee & Tea</h5>   
            </Col>
            <Col className='description-icons'>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/solo-cup.png" alt="solo-cup"/>
                 <h5>Refreshments</h5>   
            </Col>
            <Col className='description-icons'>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/dessert.png" alt="dessert"/>
                 <h5>Desserts</h5>   
            </Col>
            <Col className='description-icons'>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/natural-food.png" alt="natural-food"/>
                 <h5>Vegan</h5>   
            </Col>
            <Col className='description-icons'>
            <img width="50" height="50" src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/000000/external-Gluten-Free-healthy-diet-nawicon-glyph-nawicon.png" alt="external-Gluten-Free-healthy-diet-nawicon-glyph-nawicon"/>
                 <h5>Gluten Free</h5>   
            </Col>
        </Row>
    </Container>
    </section>
  )
}
