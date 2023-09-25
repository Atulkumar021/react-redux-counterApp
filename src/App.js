import React from 'react'
import Accout from './components/Accout'
import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'
const App = () => {
  const mystate = useSelector((state) => state.changetheNumber.counter);
  const bonusdata=useSelector((state)=> state.getbonusdata.counter)
  return (
    <>
    <div className='Appname'>App</div>
    <div className='componentname'>Current Amount :{mystate}</div>
    <div className='componentname'>Total Bonus :{bonusdata}</div>
    <Accout/>
    <Bonus/>

    </>
    
  )
}

export default App