import React from 'react'
import { useEffect } from 'react'
import { data } from '../Form/index'
import { products } from '../Form/index'

function Products() {
    return (
        <>
            <div className="min-w-[50%] h-[32rem] overflow-y-scroll bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg border rounded-lg scrollbar shadow-xl">
                <ul className="p-2 grid gap-2">
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
                </ul>
            </div>
        </>
    )
}

export default Products
