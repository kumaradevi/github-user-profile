import React, { useState } from 'react'
import { IoLogoGithub } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import {getUser,getProfileDetails,setLoading} from "@/featured/userSlice"
import { useSelector } from 'react-redux'
import {selectUser} from "@/featured/userSlice"

const Input:React.FC = () => {
    const [userName,setUserName]=useState("");
    const dispatch=useDispatch()
    const user=useSelector(selectUser);
    console.log(user);

    const handleInput=(e:any)=>{
        setUserName(e.target.value);
    }

    const handleUserProfile=async()=>{
        try{
            dispatch(setLoading(true))
            const res=await fetch(`https://api.github.com/users/${userName}`);
            const data=await res.json();
            dispatch(getUser(data))
            const res1=await fetch(`https://api.github.com/users/${userName}/repos`);
            const data1=await res1.json();
            dispatch(getProfileDetails(data1))
            dispatch(setLoading(false))

        }
        catch(err){

        }
    }
  return (
    <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
        <div className='flex gap-4'>
        <h3>Github user Profile analyser</h3>
        <div><IoLogoGithub  size={40}/></div>
        </div>
        <div className='w-[300px] border border-gray-700 rounded-lg px-3 py-2 flex justify-between items-center'>
        <input type="text" placeholder='enter your github profile name' className='outline-none w-full' value={userName} onChange={handleInput}/>
        <button onClick={handleUserProfile}><CiSearch  size={20}/></button>
        </div>
    </div>
  )
}

export default Input