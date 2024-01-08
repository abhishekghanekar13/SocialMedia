import { createContext, useReducer } from "react";

export let Postitem=createContext({ 
 postlist: [],
 addPost: () =>{},
 addInitialPost: () =>{},
 deletePost: ()=>{},
});

let postlistreducer=(currentlist,action)=>{
  let newitem=currentlist;
  if(action.type==="DELETE_ITEM"){
    newitem=currentlist.filter(post=>post.id!== action.payload.postid)
  }
  else if(action.type==="ADD_Intial_POST"){
      newitem=action.payload.posts
  }
  else if(action.type==="ADD_POST"){
     newitem=[action.payload,...currentlist]
  }
  return newitem;
}

const PostListProvider=({children})=>{
    let [postlist,dicpachpostlist]=useReducer(postlistreducer,[])
    
    let addPost=(userId,Posttitle,Postcontant,Reaction,Posttags)=>{
      dicpachpostlist({
       type: "ADD_POST",
       payload:{
         id: Date.now(),
         title: Posttitle,
         body: Postcontant,
         reaction: Reaction,
         userid: userId,
         tags: Posttags,
       }
      })
     }
     let addInitialPost=(posts)=>{
      dicpachpostlist({
       type: "ADD_Intial_POST",
       payload:{
         posts
       }
      })
     }
    let deletePost=(postid)=>{
        
    dicpachpostlist({
      type:"DELETE_ITEM",
      payload:{
        postid,
      }
    });

    }
    return(<>
    <Postitem.Provider value={{postlist,addPost,addInitialPost,deletePost}}>{children}</Postitem.Provider>
    
    </>)
}


export default PostListProvider;
