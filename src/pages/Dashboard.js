import React from 'react'
<<<<<<< HEAD
import {useSelector} from 'react-redux'

=======
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import GoalForm from '../Components/GoalForm'
import Spinner from '../Components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import GoalItem from '../Components/GoalItem'
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
import FlightForm from '../Components/FlightForm'

const Dashboard = () => {

<<<<<<< HEAD
  


  const {user} = useSelector((state)=>state.auth)
  


=======
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=>state.auth)
  const {goals, isLoading, isError, message} = useSelector((state)=>state.goals) 

  useEffect(() => {
     
     if (isError) {
      console.log(message);
     }


    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return ()=>{
      dispatch(reset())
    }

  }, [user,navigate, isError, message,dispatch])

  if (isLoading) {
    return <Spinner/>
  }
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
  
  return (
    <>
    <section className='heading'>
<<<<<<< HEAD
     <h1 className='heading-content'>welcome  	&nbsp; {user && user.name}</h1>
     <p>Flight Booking App</p>
    </section>

   
    <FlightForm/>

    
=======
     <h1>welcome{user && user.name}</h1>
     <p>Goals Dashboard</p>
    </section>

    <GoalForm/>
    <FlightForm/>

    <section className='content'>
      {goals.length > 0 ? 
      (<>
         <div className='goals'>
           {goals.map((goal)=>{
            return <GoalItem key = {goal._id} goal = {goal}/>
           })}   
         </div>
      </> ) 
      :
       (<>
          <h3> you have not set any goals</h3>
       </>)}
    </section>
>>>>>>> 22a387a62c39bbe03a2ff44795b293466bd454f1
    </>
  )
}

export default Dashboard