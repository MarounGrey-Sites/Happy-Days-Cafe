import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import Data from '../components/menu/MenuData';
import MenuCategories from '../components/menu/MenuCategories';


const categoryMessages = {
  'Churros & Desserts': '* ITEMS WITH VEGAN ICE CREAM ARE AN EXTRA CHARGE',
  'Milkshakes': 'ASK FOR DAILY FLAVORS',
  'Coffee & Tea': 'HAPPY DAYS IS SERVING LAMILL COFFEE AND TEAS. SUB ALMOND, SOY OR OAT FOR $1.',
  'Ice Cream': '2 SCOOPS AVAILABLE IN CUP OR WAFFLE CONE'
  // Add more categories and their corresponding messages as needed
};

export default function MenuPage() {

const [item, setItems] = useState(Data)
const menuCategories = [...new Set(Data.map((val) => val.category))]
const [selectedCategory, setSelectedCategory] = useState(null);

const filterItems = (cat) => {
  console.log('Selected Category:', cat);
  const filteredData = Data.filter((newval) => newval.category === cat);
  console.log('Filtered Data:', filteredData);
  setItems(filteredData);
  setSelectedCategory(cat);
};

const renderMessage = () => {
  if (selectedCategory === null) {
    return <p>ADD ICE CREAM, FRESH FRUIT & DRIZZLES TO ANY OF YOUR ORDERS!</p>
  }

  if (categoryMessages[selectedCategory]) {
    return <p>{categoryMessages[selectedCategory]}</p>;
  }

  // return <p>No message found for {selectedCategory}</p>;
};

  return (
    <div>
    <AppNavbar />
    <section >
      <div className='text-center bg-image d-flex justify-content-center' id='menu-banner'>
        <div className='bg-image-text-container'>
          <div className='bg-image-text-bg mx-auto'>
            <h1><span>MENU</span></h1>
          </div>
        </div>
      </div>        
    </section>

    <section>
    <Container>
      <MenuCategories 
          menuCategories = {menuCategories} 
          filterItems = {filterItems}
          setItems={setItems}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="text-center py-3">
        <div>{renderMessage()}</div>
        {/* Render your items here */}
      </div>
      <Row>
        {item.map((val) => (
            <Col key={val.id} xs={6} md={4} lg={4} className='my-3 border-0'>
                <div className='card-img-top text-center'>
                  <Image src={require('../assets/menu/' + val.image + '.png')} alt={val.title} className="rounded menu-item"/>
                  <div className='py-2'>
                    <div className='card-title'>
                      {val.title}
                    </div>
                    <div className='card-description'>
                      {val.description}
                    </div>
                  </div>
                </div>
              </Col>
          ))}
      </Row>
    </Container>


    </section>

    <footer>
      <AppFooter />
    </footer>
</div>
  )
}