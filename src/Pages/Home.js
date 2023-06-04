import React, { useEffect, useState } from 'react';
import { fetch_image,fetch_body,fetch_title,fetch_userId ,fetch_ID} from '../Redux/Actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {

    const[info,setInfo]= useState([]);
    const [current,setCurrent] = useState([])
    const [read,setRead] = useState([])
    const[currentImage ,setCurrentImage] = useState("")
    const[currentuserid ,setUserId] = useState("")
    const[currentbody ,setCurrentBody] = useState("")
    const[currenttitle ,setCurrentTitle] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(()=>{
    //  //console.log(current)

    // //  setCurrentImage(`https://picsum.photos/200?random=${current.id}`)
    // //  setCurrentBody(current.body)
    // //  dispatch(fetch_image(`https://picsum.photos/200?random=${current.id}`))
    // //  console.log(current.body)
    // //  console.log(`https://picsum.photos/200?random=${current.id}`)
    // // dispatch(fetch_body(current.body))
    // // dispatch(fetch_title(current.title))
    // // dispatch(fetch_userId(current.userId))
    // //  console.log(currentbody)
    // //  console.log(currentImage)
    
    // },[current])
    // useEffect(() => {
    //     if (current) {
    //       const { id, body, title, userId } = current;
    //       const imageUrl = `https://picsum.photos/200?random=${id}`;
    
    //       dispatch(fetch_image(imageUrl));
    //       dispatch(fetch_body(body));
    //       dispatch(fetch_title(title));
    //       dispatch(fetch_userId(userId));
    
    //       //navigate("/index");
    //     }
    //   }, [current, dispatch, navigate]);
   

    const nextPage = (item)=>{
        
       
        setCurrent(item) 
        // console.log("hello")
        //setIsLoading(true)
       
            // dispatch(fetch_image(`https://picsum.photos/200?random=${current.id}`))
            // dispatch(fetch_body(current.body))
            // dispatch(fetch_title(current.title))
            // dispatch(fetch_userId(current.userId))
        
            // if (current) {
            //     console.log("ji")
            //     const { id, body, title, userId } = current;
            //     const imageUrl = `https://picsum.photos/200?random=${id}`;
          
            //     dispatch(fetch_image(imageUrl));
            //      console.log(body)
            //     dispatch(fetch_body(body));
            //     dispatch(fetch_title(title));
            //     dispatch(fetch_userId(userId));
          
            //      //navigate("/index");
            //   }
         
        //navigate("/index")
    }

    function linkClick(item)
    {
        setRead(item)
    }

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> res.json())
    .then((data)=>{
        setInfo(data)
    })
    .catch((error)=>console.log(error.message))

},[])

useEffect(() => {
    if (current.id) {
      const { id, body, title, userId } = current;
      const imageUrl = `https://picsum.photos/200?random=${id}`;

      dispatch(fetch_image(imageUrl));
      console.log(body)
      dispatch(fetch_body(body));
      dispatch(fetch_title(title));
      dispatch(fetch_userId(userId));
      dispatch(fetch_ID(id));

      navigate(`/index/${id}`);
    }
  }, [current, dispatch, navigate]);

  useEffect(() => {
    if (read.id) {
      const { id, body, title, userId } = read;
      const imageUrl = `https://picsum.photos/200?random=${id}`;

      dispatch(fetch_image(imageUrl));
      console.log(body)
      dispatch(fetch_body(body));
      dispatch(fetch_title(title));
      dispatch(fetch_userId(userId));
      dispatch(fetch_ID(id));

      navigate(`/index/${id}`);
    }
  }, [read, dispatch, navigate]);
   
  return (
    <div className='grand'>
      <div className='parent-container'>
        <div className='child-container' >
          {
            info.map((item,index)=>(
                <div className='child' key={item.id}>
                    <img src={`https://picsum.photos/200?random=${item.id}`} onClick={()=>nextPage(item)} id="img" style={{maxWidth:"325px",height:"325px",borderRadius: "20px 20px 0px 0px",cursor:"pointer"}}></img>
                   <p> UserId : { item.userId}</p>
                   {
                    item.title.length>30 ?(
                        
                            <p>Title : { item.title.slice(0,30)}....</p>
                        
                    ):(
                        <p>Title : { item.title} </p> 
                    )
                   }
                   {
                    item.body.length>60 ?(
                        
                            <p>Body : { item.body.slice(0,60)}  <p style={{marginTop:"2px",marginLeft:"0px",paddingLeft:"0px",color:"blue",cursor:"pointer"}} onClick={()=>linkClick(item)} >Read More....</p></p>
                        
                    ):(
                        <p>Body : { item.body} </p> 
                    )
                   }
                   
                    </div>
                
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
