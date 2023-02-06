import React,{useState}from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} className="btn btn-success">Increment</button>
      <button onClick={() => setCount(count !== 0 ? count - 1 : (count = 0))} className="btn btn-danger">Decrement</button>
      <button className="btn btn-info" onClick={() => setCount(0)}>Restart</button>
    </div>
    </div>
  )
} 

export default Counter
