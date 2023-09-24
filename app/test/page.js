"use client"

import { useSelector } from 'react-redux'

function Page()
{   
    const count = useSelector((state) => state.counter)
    return (
        <div>
            <h1>Test</h1>
            <p>Total Items: {count.value} </p>
            <p>Total Price: {count.price} </p>
        </div>
    )
}

export default Page;