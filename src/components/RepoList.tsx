import React, {  useState } from 'react';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectUser, selectProfile,selectLoading } from '@/featured/userSlice';
import { GoRepo } from "react-icons/go";
import Loader from './Loader';

interface Repo {
  id: number;
  name: string;
  [key: string]: any;
}

const RepoList: React.FC = () => {
  const user = useSelector(selectUser);
  const profile = useSelector(selectProfile) as Repo[] ?? [];
  const [expand,setExpand]=useState(false);
  const loading=useSelector(selectLoading)

 


  const profiles=expand ? profile.slice(0,8).map((item:any)=>item) : profile.map((item:any)=>item)


  console.log('User:', user);
  console.log('Profile from Redux:', profile);

  return (
  <>
  {loading ? <Loader/> :
   ( <div className='mt-20'>
      {profile.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {profiles.map((item: Repo) => (
            <div key={item.id} className='border rounded-lg p-5 mb-4 '>
                <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center '>
              <div><GoRepo /></div>
              <Link to={`https://github.com/${user}/${item.name}`}> <p className='font-medium text-blue-600/75 '>{item.name}</p></Link>
              </div>
               <p className='text-sm text-gray-500 border border-gray-500 px-3 py-1 rounded-full'>public</p>
                </div>
            </div>
          ))}
          <div className=''>
          <button onClick={()=>setExpand(!expand)} className='bg-blue-400 text-white w-[130px] rounded-full px-3 py-2'>{expand ? "view more" : "view less"}</button>
          </div>
        </div>
        
      ) : (
        <div>No repositories found</div>
      )}
    </div>)}
    </>
  );
};

export default RepoList;
