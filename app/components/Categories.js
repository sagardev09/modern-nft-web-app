import React from 'react'
import CatCard from './CatCard'

const Categories = () => {


    return (
        <div className='mt-48'>
            <h1 className='text-white text-4xl font-semibold capitalize'>
                Browse Categories
            </h1>
            <div className='mt-12 grid grid-cols-4 gap-4 '>
                <CatCard />
            </div>
        </div>
    )
}

export default Categories
