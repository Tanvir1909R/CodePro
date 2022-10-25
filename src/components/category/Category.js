import React from 'react'
import { Link } from 'react-router-dom';
import './category.css'

const Category = ({category}) => {
    console.log(category);
  return (
    <div className='category'>
        <Link>{category.category}</Link>
    </div>
  )
} 

export default Category