import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet ,Link, useNavigate } from 'react-router-dom'
import { setToken } from '../slices/authSlice';
import { setUser } from '../slices/userSlice';
import { setProblem, setStep,setedit } from '../slices/problemSlice';
const Dashboard = () => {

  const {user} = useSelector((state) => state.user);
  const {edit} = useSelector((state) => state.problem);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setToken(null));
    dispatch(setUser(null));
    navigate("/");
  }


  return (
    
    <div className='max-w-[1260px] w-11/12 mx-auto mt-2 flex flex-row gap-2 border-2 border-black'>

            {/*sidebar*/}
            <div className = 'mt-2 ml-2 w-[30%] md:w-[20%]  p-2 border-2 min-h-screen bg-black flex flex-col gap-5'>

                  <div className='text-white font-semibold font-mono text-lg'>
                      <ul className='flex flex-col gap-5'>
                        <Link to = "/dashboard/myprofile">
                        <li className='cursor-pointer border-2 p-2'>MyProfile</li>
                        </Link>
                        {
                            user.accountType === "Admin" && (
                              <Link to = "/dashboard/addproblem">
                                <li onClick = {() => {dispatch(setProblem(null)); dispatch(setStep(1)); dispatch(setedit(false)) }} className='cursor-pointer border-2 p-2'>Add Problem</li>
                              </Link>
                              )
                        }
                        
                        {
                          user.accountType === "Admin" && (
                                <Link to = "/dashboard/mycreatedproblems">
                                    <li className='cursor-pointer border-2 p-2'>MyCreated-Problems</li>
                                </Link>
                          )
                        }
                      </ul>
                  </div>

                  <ul className='cursor-pointer text-white font-mono font-semibold text-lg'>
                      <hr/>
                      <li onClick = {logoutHandler} className='cursor-pointer border-2 p-2 mt-2'>Logout</li>
                  </ul>

            </div>
            {/* Outlet */}

            <Outlet/>


    </div>
  )
}

export default Dashboard