import { PROFILEPIC,USERID,TITLE,BODY,ID } from "./ActionTypes";

export const fetch_image = (image)=>{

return{
    type:PROFILEPIC,
    payload:image
}
}
export const fetch_userId = (uid) =>{
    return{
        type:USERID,
        payload:uid
    }
    }

 export const fetch_title = (title) =>{
        return{
            type:TITLE,
            payload:title
        }
        }

 export const fetch_body = (body) =>{
            return{
                type:BODY,
                payload:body
            }
            }

            export const fetch_ID = (id) =>{
                return{
                    type:ID,
                    payload:id
                }
                }

            