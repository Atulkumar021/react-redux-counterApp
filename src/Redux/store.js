import { combineReducers, createStore } from "redux";
import changetheNumber from '../Redux/reducers/countnum-reducer'
import getbonusdata from '../Redux/reducers/bonusReducers'
const rootReducer=combineReducers({changetheNumber,getbonusdata})
const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store