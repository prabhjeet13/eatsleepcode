import React from 'react'
import { Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import onlinejudgeimage from '../assets/images/onlinejudgeimage.jpg'
const Home = () => {
  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.user);
  return (
    <div className='mx-auto'>
         
         {/* section 1*/}
         <div className='w-11/12 max-w-[1260px] mx-auto flex flex-col items-center justify-center text-white'>
             
          { token === null && user === null && (
             <Link to = "/signup">
                <div className='shadow-lg shadow-black text-orange-600 font-bold mt-5 px-4 py-2 rounded-full bg-blue-950 flex flex-row items-center justify-center gap-1 transition-all duration-200 hover:bg-blue-900 hover:scale-95'>
                      <p>Become a coder</p>
                      <FaArrowRight/>
                </div>
             </Link>
          )} 

          <img src = {onlinejudgeimage} className='w-11/12 h-[100vh] mt-5'/>

         </div>


    </div>
  )
}

export default Home