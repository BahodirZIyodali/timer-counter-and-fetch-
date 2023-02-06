import React ,{useReducer   } from 'react'

 function ReactCounter() {
  const initialState = { 
    count: 0,
  }
  const reducer =(state,action) => {
  switch (action.type) {
    case 'decrement':    return{ count: state.count !==0 ? (state.count-1) :(state.count=0 )}
    case 'increment': return{count: state.count+1}   
  default: state
  }}
  const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <div className='container'> 
      <div>
        <h2>{state.count}</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: 'decrement' })
          }}
        >
          decrement
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
         onClick={()=>{ 
          dispatch({type: 'increment'})
         }}
        >
          increment
        </button>
      </div>
    </div>
  )
}
export default ReactCounter