import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
 export const products = [{
        id: 1,
        name: 'Product 1',
        category: 'category 1',
        price: 100
    }, {
        id: 2,
        name: 'Product 2',
        category: 'category 2',
        price: 200
    }, 
    {
        id: 3,
        name: 'Product 2',
        category: 'category 2',
        price: 200
    }, {
        id: 4,
        name: 'Product 2',
        category: 'category 2',
        price: 200
    }, {
        id: 5,
        name: 'Product 3',
        category: 'category 3',
        price: 300
    }]
export default function Product() {
   

    const productElements = productss.map(product =>
        <Link to={`${product.id}`}>
        <div className='product-element'>
            <img src="https://via.placeholder.com/150" alt="product" />
            <h4>{product.name}</h4>
            <p>{product.category}</p>
            <p>{product.price}</p>
        </div>    
        </Link>
    )
    
    return (
        <div className="products-container">
            <h3>Explore our products options</h3>
            <div className="product-list-filter-buttons">
                <button className="filter-btn">category 1</button>
                <button className="filter-btn">category 2</button>
                <button className="filter-btn">category 3</button>
            </div>
            <div className="product-list">
                {productElements}
            </div>
        </div>
    )
}

export const productss = [{
    id: 1,
    name: 'Product 1',
    category: 'category 1',
    price: 100
}, {
    id: 2,
    name: 'Product 2',
    category: 'category 2',
    price: 200
}, 
{
    id: 3,
    name: 'Product 2',
    category: 'category 2',
    price: 200
}, {
    id: 4,
    name: 'Product 2',
    category: 'category 2',
    price: 200
}, {
    id: 5,
    name: 'Product 3',
    category: 'category 3',
    price: 300
}]