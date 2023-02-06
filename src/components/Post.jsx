import axios from 'axios'
import React,{useEffect,useState} from 'react'

const Post = () => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(data => {  
          setPosts(data.data  )
          setLoading(true)
          console.log(data.data)
            })
    }, [])
    if(!loading) {
        return <h1>Loading...</h1>
    }
  return (
    <div className="container">
         <h1>post</h1>
     
     {  posts?.map((el)=>{
         return(
            <ul className="list-group" key={el.id}>
            <li className='list-group-item'>
               {el.id}  {el.title}
            </li>
            </ul>
         )
       }) }  
      

    </div>

  )
}

export default Post