import React from 'react'

const PageHeader = () => {
  return (
    <div className='flex flex-col gap-y-3 mt-5'>
        <p className='text-lg'><span className='text-red-700 hover:underline hover:cursor-pointer'>Home</span> / <span className='hover:underline hover:cursor-pointer'>Cars</span></p>
        <h1 className='text-4xl'>All Cars</h1>
    </div>
  )
}

export default PageHeader