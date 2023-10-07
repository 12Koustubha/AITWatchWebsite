import React from 'react'

const InformationPage = () => {
  return (
    <div className='flex flex-col' style={{ backgroundColor: "rgba(229, 231, 231, 0.353" }}>
        <div className='flex justify-a m-5'>
            <span className='text-black font-bold font-lg '>Get in touch</span>
            <div className='text-sm text-gray-500'>Enter your email address</div>
        </div>
        <div>
            <span className='text-xs text-gray-500'>Be the first to know when new products drop andstay tuned.</span>
            
        </div>
    </div>
  )
}

export default InformationPage