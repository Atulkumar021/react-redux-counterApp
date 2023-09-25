import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import {increment,decrement,incrementByamt} from '../Redux/action/accounts'

const Accout = () => {
  const dispatch = useDispatch();
  const mystate = useSelector((state) => state.changetheNumber.counter);
  const [inputs, setinputs] = useState("");
  const handlechange=(e)=>{
        setinputs(e.target.value)
  }
  return (
    <div className="box">
      <div className="container">
        <p className="Appname">Account Component</p>
        <p className="componentname">Amount: $ {mystate} </p>
        <button
          className="btn"
          style={{ margin: "1rem", height: "30px", cursor: "pointer" }}
          onClick={()=>dispatch(increment())}
        >
          Increment +
        </button>
        <button
          className="btn"
          style={{ marginRight: "1rem", height: "30px", cursor: "pointer" }}
          onClick={()=>dispatch(decrement())}
        >
          Decrement -
        </button>
        <input
          type="text"
          placeholder="Enter the value..."
          value={inputs}
          onChange={handlechange}
          style={{ height: "23px" }}
        />
        <button
          className="btn"
          style={{ margin: "1rem", height: "30px", cursor: "pointer" }}
          onClick={()=>dispatch(incrementByamt(inputs),setinputs(''))}
        >
          Increment By +
        </button>
      </div>
    </div>
  );
};

export default Accout;
