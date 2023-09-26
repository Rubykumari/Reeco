import React from 'react'
import Product from '../product-table/Product'
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
                    <tr>
                        <Product />
                    </tr>
                    <tr>
                        <Product />
                    </tr>
                    <tr>
                        <Product />
                    </tr>
                    <tr>
                        <Product />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductList