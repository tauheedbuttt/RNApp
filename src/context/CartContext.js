import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch(action.type){
    case 'add':
      return [...state, {...action.payload, id: state.length+1}];
    case 'buy':
      return [{...action.payload, id: state.length+1}];
    case 'quantity':
      return state.map((item)=>{
        if (item.id == action.payload.id){
          return {...item, quantity: action.payload.count}
        }
        else{
          return {...item}
        }
      })
    case 'remove':
      return state.filter((item) => item.id != action.payload)
  }
}

const addItem = (dispatch) => (item) => {
  dispatch({type: 'add', payload: {...item, quantity: 1}});
}
const buyItem = (dispatch) => (item) => {
  dispatch({type: 'buy', payload: {...item, quantity: 1}});
}
const setQuantity = (dispatch) => (id, count) => {
  dispatch({type: 'quantity', payload: {id, count}});
}
const removeItem = (dispatch) => (id) => {
  dispatch({type: 'remove', payload: id});
}

const initialState = [

]

export const {Context, Provider} = createDataContext(
  reducer,
  {addItem, setQuantity, removeItem, buyItem},
  initialState,
);