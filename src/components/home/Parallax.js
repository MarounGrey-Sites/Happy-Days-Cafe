import React from 'react'
import { Container } from 'react-bootstrap'
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Parallax() {
  return (
    <section >
        <Container className="position-relative d-flex justify-content-center p-0">
            <ParallaxProvider>
                <ParallaxBanner 
                            layers={[
                                { image: require('../../assets/banner-4.webp'), speed: -20 },
                            ]}
                            className=""
                style={{ height: '500px' }} />
                <div className="text-center vertical-center p-4 bg-image-text-bg mx-5 parallax-card">
                    <h1 id="homepage-text-bg"><span>Happy Days Cafe</span></h1>
                    <div className="mx-auto">
                        <p> Dive into our must-try specialty drinks like the horchata latte and iced minty coffee. Indulge in made-to-order churros, with options like gluten-free and vegan. Whether sugared, dipped in homemade hot chocolate, stuffed with dulce de leche, or paired with ice cream, they're a true delight.</p>
                    </div>
                </div>
            </ParallaxProvider>
        </Container>
    </section>
  )
}
