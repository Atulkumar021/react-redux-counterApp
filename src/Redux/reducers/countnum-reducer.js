
const initialstate={
    counter:0
}

const changetheNumber= (state = initialstate, action) => {
  switch (action.type) {
    case 'INCREMENT': {
        return{
            ...state,
           counter: state.counter + 1
        }
    }
    case 'DECREMENT': {
        return{
            ...state,
             counter:state.counter - 1}
    }

    case 'INCREMENTBYAMT': {
        return{
            ...state,
            counter:state.counter+parseInt(action.payload)
        }
    }
    default:
        return state;
  }
};
export default changetheNumber
