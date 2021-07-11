import React, { useState } from 'react';
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/PortfolioData';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfolioPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if(category === 'All'){
      setMenuItems(portfolios);
      return;
    };
    const filteredData = portfolios.filter(item => {
      return item.category === category;
    });;
    setMenuItems(filteredData);
  }
  return (
    <div className='portfolio-page'>
      <div className="portfolio-title">
        <Title title={'Projects'} span={'Projects'} />
      </div>
      <div className="portfolio-container">
        <Categories filter={filter} categories={categories}/>
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  )
}

export default PortfolioPage
