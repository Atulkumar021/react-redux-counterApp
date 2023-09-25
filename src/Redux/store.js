import { combineReducers, createStore } from "redux";
import changetheNumber from '../Redux/reducers/countnum-reducer'
import getbonusdata from '../Redux/reducers/bonusReducers'
const rootReducer=combineReducers({changetheNumber,getbonusdata})
const store=createStore(rootReducer)

export default store