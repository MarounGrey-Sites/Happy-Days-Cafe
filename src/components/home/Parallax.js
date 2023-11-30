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
                        <p>Step into our charming cafe, where we proudly serve a delightful array of vegan churros that harmonize seamlessly with our finest coffee blends. Explore the diverse world of plant-based delights, complemented by our gluten-free alternatives, catering to diverse tastes and preferences. Please note that while our churros are entirely vegan, some of the stuffings may contain non-vegan ingredients.</p>
                    </div>
                </div>
            </ParallaxProvider>
        </Container>
    </section>
  )
}
