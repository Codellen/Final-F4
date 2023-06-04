import React from 'react'
import { useSelector } from 'react-redux'
function Details() {

const image = useSelector((state)=>state.data.image)
const body = useSelector((state)=>state.data.body)
const title = useSelector((state)=>state.data.title)
const userid = useSelector((state)=>state.data.userID)
const id = useSelector((state)=>state.data.id)
// console.log("hello")
// console.log(body)
// console.log(title)
// console.log(image)


  return (
    <div className='details-container'>
      <h3 style={{margin:"1rem"}}>Details Page For Post With ID -{id}</h3>
      <img src={image} className='image'></img>
      <p><strong>User ID</strong> : {userid}</p>
      <p><strong>Title</strong> : {title}</p>
      <p><strong>Body</strong> : {body}</p>
    </div>
  )
}

export default Details
