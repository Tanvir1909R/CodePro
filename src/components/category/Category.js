import React from 'react'
import { Link } from 'react-router-dom';
import './category.css'

const Category = ({category}) => {
  return (
    <div className='category'>
        <Link to={`/courses/${category.category}`}>{category.category}</Link>
    </div>
  )
} 

export default Category