const initialstate={
    counter:0
}

const getbonusdata=(state=initialstate,action)=>{
   switch(action.type){
    case 'ADD_BONUS':{ 
        return{
         ...state,
            counter:state.counter+1
        }
    }
    default:
        return state
   }
} 

export default getbonusdata