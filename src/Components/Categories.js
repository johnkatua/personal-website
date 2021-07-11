import React from 'react'

function Categories({filter, categories}) {
  return (
    <div className='button'>
      {
        categories.map((item, index) => {
          return <button type='button' className='btn-port' key={index} onClick={() => filter(item)}>{item}</button>
        })
      }
    </div>
  )
}

export default Categories;
