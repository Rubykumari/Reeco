import React from 'react'
import Product from '../product-details/Product'
import './ProductList.scss'

const ProductList = () => {
    return (
        <div>
            <table className='productsTable'>
                <thead>
                    <tr>
                        <th className='productName'>Product name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>

                </tbody>
            </table>
        </div>
    )
}

export default ProductList