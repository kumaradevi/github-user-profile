import React from 'react'
import { useSelector } from 'react-redux'
import {selectUser} from "@/featured/userSlice.ts"


interface User{
  name:string
  avatar_url:string
}

const UserCard:React.FC = () => {
  const user=useSelector(selectUser) as User;
  console.log(user)
  return (
    <div>
    <h3>{user?.name}</h3>
    <div className='w-[100px] '>
      <img src={user?.avatar_url} alt=""  className='w-full rounded-full object-cover'/>
    </div>
    </div>
  )
}

export default UserCard