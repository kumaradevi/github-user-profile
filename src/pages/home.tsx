import Input from '@/components/Input'
import Navbar from '@/components/Navbar'
import RepoList from '@/components/RepoList'
import UserCard from '@/components/UserCard'
import React from 'react'



const Home:React.FC = () => {
  
    
  return (
    <div className='flex w-[90%] mx-auto flex-col'>
      <Navbar/>
        <Input/>
      <UserCard/>
        <RepoList />
    </div>
  )
}

export default Home