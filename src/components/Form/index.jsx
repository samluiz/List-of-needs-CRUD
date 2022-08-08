import React, { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Products from '../Products'
import CurrencyInput from 'react-currency-masked-input'

export let data = {}
export let products = []

function Form() {
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [brand, setBrand] = useState('')
    const [prior, setPrior] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        data = { desc, price, brand, prior, id: uuidv4() }
        products.push(data)
        setDesc('')
        setPrice('')
        setBrand('')
        setPrior('')
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className=" flex flex-col justify-center items-center max-w-[72rem] gap-6  "
            >
                <div className="  ">
                    <label htmlFor="" className=" w-screen ">
                        Product description
                        <input
                            type="text"
                            name="name"
                            id="inputname"
                            placeholder="Muffin' Jacket"
                            className="p-1 w-[20rem] sm:w-[40rem] bg-transparent border-b-black border-b-[1px] block focus:outline-none "
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="">
                    <label htmlFor="" className=" ">
                        Product price
                        <input
                            type="number"
                            name="price"
                            value={price}
                            id="inputname"
                            placeholder="$200"
                            className="p-1 w-[20rem] sm:w-[40rem] bg-transparent border-b-black border-b-[1px] block focus:outline-none "
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className=" ">
                    <label htmlFor="" className=" ">
                        Brand
                        <input
                            type="text"
                            name="brand"
                            id="inputbrand"
                            placeholder="Nike"
                            className=" p-1 w-[20rem] sm:w-[40rem] bg-transparent border-b-black border-b-[1px] block focus:outline-none"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="">
                    <label htmlFor="" className=" ">
                        Priority
                    </label>
                    <select
                        name="priority"
                        id="selectpriority"
                        className="p-1 w-[20rem] sm:w-[40rem] bg-transparent border-b-black border-b-[1px] block focus:outline-none "
                        value={prior}
                        onChange={(e) => setPrior(e.target.value)}
                        required
                    >
                        <option value="0">How much do you want it?</option>
                        <option value="It can wait">It can wait</option>
                        <option value="I want it">I want it</option>
                        <option value="I need it">I need it</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-white min-w-[8rem] min-h-[2.5rem] rounded-xl"
                >
                    Add Item
                </button>
            </form>
            <Products />
        </>
    )
}

export default Form
