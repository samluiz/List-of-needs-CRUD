import React, { useState } from 'react'
import { useEffect } from 'react'
import { products } from '../Form'

function Products(props) {
    return (
        <>
            <div className="min-w-[70%] h-[32rem] overflow-y-scroll bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg border rounded-lg scrollbar shadow-xl">
                <table className="auto border-collapse border border-spacing-2 ml-auto mr-auto w-full">
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
                                    <td className="border text-center">
                                        {product.desc}
                                    </td>
                                    <td className="border text-center">
                                        {product.price}
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

                {/* <ul className="p-2 grid gap-2">
                    {products.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className=" border p-2 rounded-xl"
                            >
                                <li>{product.desc}</li>
                                <li>{product.price}</li>
                                <li>{product.brand}</li>
                                <li>{product.prior}</li>
                            </div>
                        )
                    })}
                </ul> */}
            </div>
        </>
    )
}

export default Products
