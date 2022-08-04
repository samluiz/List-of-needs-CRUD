import React from 'react'
import Form from '../Form'
import Header from '../Header'
import Products from '../Products'

function Main() {
    return (
        <>
            <main className=" flex items-center flex-col gap-6 h-screen bg-gradient-to-br from-rose-100 to-teal-100">
                <Header />
                <Form />
            </main>
        </>
    )
}

export default Main
