import React from 'react'

const Shimmer = () => {
  return (
    <>
        {Array(10).fill("").map((e, index) => (
            <div key={index} className='w-fit h-fit rounded-lg'>
                <div className='w-80 h-64 bg-gray-300'></div>
                <div className='p-2 flex flex-col gap-3'>
                    <h2 className='bg-gray-300 h-4 w-1/2'></h2>
                    <div className='flex items-center gap-2'>
                        <div className='h-10 w-10 rounded-full bg-gray-300'></div>
                        <h5 className='bg-gray-300 h-4 w-1/2'></h5>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default Shimmer