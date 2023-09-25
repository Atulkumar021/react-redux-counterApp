import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addbonus} from '../Redux/action/bonuss'
const Bonus = () => {
  const dispatch=useDispatch()
  const bonusdata=useSelector((state)=> state.getbonusdata.counter)
  return (
    <div>
         <div className='box'>
     <div className='container' style={{margin:'0px'}}>
     <p className='Appname'>Bonus Component</p>
     <p className='componentname'>Total Point: {bonusdata}</p>
     <button  className='btn' style={{margin:'1rem', height:'30px',cursor:'pointer'}}onClick={()=>dispatch(addbonus())} >Increment +</button>
   </div>
   </div>
    </div>
  )
}

export default Bonus