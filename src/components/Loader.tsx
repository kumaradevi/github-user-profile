import React from 'react'

const Loader:React.FC = () => {
  return (
    <div className='flex gap-2 justify-center items-center w-full h-full mt-20'>
      <div className='w-[10px] h-[10px] bg-blue-700 rounded-full'></div>
      <div  className='w-[10px] h-[10px] bg-blue-700 rounded-full'></div>
      <div  className='w-[10px] h-[10px] bg-blue-700 rounded-full'></div>
    </div>
  )
}

export default Loader