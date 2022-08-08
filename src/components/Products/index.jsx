import React, { useState } from 'react'
import { useEffect } from 'react'
import { products } from '../Form'

function Products() {
    return (
        <>
            <div className="min-w-[70%] h-[32rem] overflow-y-scroll bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg border rounded-lg scrollbar shadow-xl">
                <table className="auto border-collapse border ml-auto mr-auto w-full">
                    <thead>
                        <tr>
                            <th className="border">Product</th>
                            <th className="border">Price</th>
                            <th className="border">Brand</th>
                            <th className="border">Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td className="border text-center break-words">
                                        {product.desc}
                                    </td>
                                    <td className="border text-center">
                                        ${product.price}
                                    </td>
                                    <td className="border text-center">
                                        {product.brand}
                                    </td>
                                    <td className="border text-center">
                                        {product.prior}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Products
