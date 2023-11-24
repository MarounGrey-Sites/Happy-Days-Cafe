import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Uber from "../assets/icons8-uber-eats-app.svg"
import Doordash from "../assets/icons8-doordash.svg"
import Postmates from "../assets/icons8-postmates.svg"
import Grubhub from "../assets/icons8-grubhub.svg"
import Yelp from "../assets/icons8-yelp-logo.svg"
import Facebook from "../assets/icons8-facebook-24.svg"
import Instagram from "../assets/icons8-instagram.svg"

export default function AppFooter() {
  return (
    <div>
        <Container className="d-flex flex-column align-items-center mt-5 p-3 line-border">

            <Row className="py-2">
              <Col><a className="my-3" href='https://www.ubereats.com/store/happy-days-cafe/EETBQNNmSLi8_E6H79P5gw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION' target='_blank'><img src={Uber} width="25" height="25" className="d-inline-block align-top link-icon" alt="Uber Eats"/></a></Col>
              <Col><a className="my-3" href='https://www.doordash.com/store/happy-days-cafe-(sherman-oaks)-los-angeles-640271/?event_type=autocomplete&pickup=false' target='_blank'><img src={Doordash} width="25" height="25" className="d-inline-block align-top link-icon" alt="Doordash"/></a></Col>
              <Col><a className="my-3" href='https://postmates.com/store/happy-days-cafe/EETBQNNmSLi8_E6H79P5gw' target='_blank'><img src={Postmates} width="25" height="25" className="d-inline-block align-top link-icon" alt="Postmates"/></a></Col>
              <Col><a className="my-3" href='https://www.grubhub.com/restaurant/happy-days-cafe-14552-ventura-blvd-sherman-oaks/1076894' target='_blank'><img src={Grubhub} width="25" height="25" className="d-inline-block align-top link-icon" alt="Grubhub"/></a></Col>
              <Col><a className="my-3" href='https://www.yelp.com/biz/happy-days-cafe-los-angeles' target='_blank'><img src={Yelp} width="25" height="25" className="d-inline-block align-top link-icon" alt="Yelp"/></a></Col>
              <Col><a className="my-3" href='https://www.facebook.com/happydaysla/' target='_blank'><img src={Facebook} width="25" height="25" className="d-inline-block align-top link-icon" alt="Facebook"/></a></Col>
              <Col><a className="my-3" href='https://www.instagram.com/happydayscafe/' target='_blank'><img width="25" height="25" src={Instagram} alt="Instagram" className="d-inline-block align-top link-icon"/></a></Col>
            </Row>
            <Row>© {new Date().getFullYear()} Happy Days Cafe. All rights reserved.</Row>
        </Container>
    </div>
  )
}