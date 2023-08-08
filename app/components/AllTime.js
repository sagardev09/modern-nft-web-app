import React, { useState, useEffect } from 'react'
import RankingBar from './RankingBar'
import Loader from './Loader'

const AllTime = () => {
    const [data, setdata] = useState(false)

    useEffect(() => {
        const showdata = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setdata(true)
        }
        showdata()
    }, [])

    return (
        <div className={data ? 'h-full overflow-hidden' : "h-[500px] overflow-hidden"}>
            {data ?
                <RankingBar /> : <Loader />
            }
        </div>
    )
}

export default AllTime
