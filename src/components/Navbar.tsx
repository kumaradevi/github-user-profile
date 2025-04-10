import { selectUser } from '@/featured/userSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import { IoLogoGithub } from "react-icons/io";

const Navbar:React.FC = () => {
    const user=useSelector(selectUser);

  return (
    <div className='bg-blue-400/75 w-full h-[100px] text-white flex items-center px-3 justify-between'>
      <div className='flex gap-4 items-center'>
      <div><IoLogoGithub  size={50}/></div>
        <h3 className='text-xl font-bold'>Github user Profile analyser</h3>
        
        </div>
          <div className='flex gap-4 items-center'>
           
            <h3 className='font-semibold text-xl'>{user?.name}</h3>
            <div className='w-[40px]'>
                <img src={user?.avatar_url} alt="" className='w-full object-cover rounded-full'/>

            </div>
          </div>
    </div>
  )
}

export default Navbar