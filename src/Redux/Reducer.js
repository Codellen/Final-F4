import { fetch_image,fetch_title,fetch_userId,fetch_body,fetch_ID } from "./Actions"; 
import { combineReducers } from "redux";
let initialState = {
    userID : "",
    image:"",
    title:"",
    body:"",
    id:""
}

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case"PROFILEPIC":
        return{
            ...state,image:action.payload
        }
        case"USERID":
        return{
            ...state,userID:action.payload
        }
        case"TITLE":
        return{
            ...state,title:action.payload
        }
        case"BODY":
        return{
            ...state,body:action.payload
        }
        case"ID":
        return{
            ...state,id:action.payload
        }
        default:
            return state
    }
    
}

const rootreducer = combineReducers({
    data:reducer
})

export default rootreducer