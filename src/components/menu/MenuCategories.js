import React from 'react'
import Button from 'react-bootstrap/Button';
import Data from './MenuData';

export default function MenuCategories({menuCategories, filterItems, setItems, setSelectedCategory}) {
    const handleAllClick = () => {
        setItems(Data);
        setSelectedCategory(null); // Set selected category to null for "All" button
      };
    
  return (
    <div className='text-center py-3'>
            <div className='mx-auto'>
            <div className='p-2 d-inline-block'>
                <Button className='menu-btns' onClick={handleAllClick} autoFocus>
                    All
                </Button>
            </div>
        {
            menuCategories.map(val => (
                <div className='p-2 d-inline-block'>
                    <Button className='mx-auto menu-btns' onClick={() => filterItems(val)}>
                        {val}
                    </Button>
                </div>
            ))
        }

        </div>
    </div>
  )
}
