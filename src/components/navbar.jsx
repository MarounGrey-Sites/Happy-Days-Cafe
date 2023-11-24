import React from 'react';
import { useState } from 'react';
import { Container, Navbar, Nav, NavLink, Collapse, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Logo from "../assets/logo.png"
import Uber from "../assets/icons8-uber-eats-app.svg"
import Doordash from "../assets/icons8-doordash.svg"
import Postmates from "../assets/icons8-postmates.svg"
import Grubhub from "../assets/icons8-grubhub.svg"


const menuData = [
  {
    path:'/',
    name: 'Home'
  },
  {
    path:'/menu',
    name: 'Menu'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  },
]



export default function AppNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Container>
        <Navbar.Brand href='/' className="m-auto">
            {/* LOGO */}
            <img
              src={Logo}
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                menuData.map((item)=>(
                    <NavLink href={item.path} key={item.name}>
                        <div>{item.name}</div>
                    </NavLink>
                ))
            }        
          </Nav>

          <div id='order-online'>

          <Button onClick={() => setOpen(!open)}
            aria-controls="orderOnline"
            aria-expanded={open}
            className='px-4'>Order Online</Button>
            <Collapse in={open} dimension="height">
            <div id="orderOnline" className='pt-1'>
              <Row className='m-0'>
              <Col className='p-1'><a href='https://www.ubereats.com/store/happy-days-cafe/EETBQNNmSLi8_E6H79P5gw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION' target='_blank'><img src={Uber} width="30" height="30" className="d-inline-block align-top link-icon" alt="Uber Eats"/></a></Col>
              <Col className='p-1'><a href='https://www.doordash.com/store/happy-days-cafe-(sherman-oaks)-los-angeles-640271/?event_type=autocomplete&pickup=false' target='_blank'><img src={Doordash} width="30" height="30" className="d-inline-block align-top link-icon" alt="Doordash"/></a></Col>
              <Col className='p-1'><a className="my-3" href='https://postmates.com/store/happy-days-cafe/EETBQNNmSLi8_E6H79P5gw' target='_blank'><img src={Postmates} width="25" height="25" className="d-inline-block align-top link-icon" alt="Postmates"/></a></Col>
              <Col className='p-1'><a href='https://www.grubhub.com/restaurant/happy-days-cafe-14552-ventura-blvd-sherman-oaks/1076894' target='_blank'><img src={Grubhub} width="30" height="30" className="d-inline-block align-top link-icon" alt="Grubhub"/></a></Col>
              </Row>
            </div>
            </Collapse>

          </div>
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


    );
}