import Navbar from './components/Navbar'
import Home from './components/Home'
import Counter from './components/Counter'
import Post from './components/Post'
import UseReducer from './components/UseReducer'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
     <>
       <Navbar/>
      <Routes>
    <Route path="/" element={<Home  /> } />
    <Route path="/counter" element={<Counter />} />
    <Route path="/post" element={<Post />} />
    <Route path="/counter2" element={<UseReducer/>} />
  </Routes>
    </>
  )
}

export default App
