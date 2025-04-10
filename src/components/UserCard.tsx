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
   
    </div>
  )
}

export default UserCard