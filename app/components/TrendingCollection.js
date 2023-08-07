import React from 'react'
import TrendingCard from './TrendingCard'

const TrendingCollection = () => {
    return (
        <div className='mt-48'>
            <h1 className='text-white text-4xl font-semibold capitalize'>
                trending collections
            </h1>
            <h5 className='text-white text-xl font-normal capitalize mt-4'>
                Checkout our weekly updated trending collection.
            </h5>
            <div className='flex gap-4 justify-between mt-12'>
                <TrendingCard />
            </div>
        </div>
    )
}

export default TrendingCollection
