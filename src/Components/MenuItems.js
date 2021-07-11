import React from 'react'

function MenuItems({menuItem}) {
  return (
    <div className='menu-item'>
      {
        menuItem.map((item) => {
          return (
            <div className='portfolio' key={item.id}>
              <div className="image-data">
                <img src={item.image} alt="" />
                <ul className="hover-item">
                <li>
                  <a href={item.link1}>Github</a>
                  <a href={item.link2}>Web App</a>
                </li>
              </ul>
              </div>
              <h5 className="item-title">
                {item.title}
              </h5>
              <p className="item-text">
                {item.text}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default MenuItems;
