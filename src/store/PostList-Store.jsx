import { createContext, useReducer } from "react";

export let Postitem=createContext({ 
 postlist: [],
 addPost: () =>{},
 deletePost: ()=>{},
});

let postlistreducer=(currentlist,action)=>{
  let newitem=currentlist;
  if(action.type==="DELETE_ITEM"){
    newitem=currentlist.filter(post=>post.id!== action.payload.postid)
  }
  else if(action.type==="ADD_POST"){
     newitem=[action.payload,...currentlist]
  }
  return newitem;
}

const PostListProvider=({children})=>{
    let [postlist,dicpachpostlist]=useReducer(postlistreducer,Default_Post_List)
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
    let deletePost=(postid)=>{
        
    dicpachpostlist({
      type:"DELETE_ITEM",
      payload:{
        postid,
      }
    });

    }
    return(<>
    <Postitem.Provider value={{postlist,addPost,deletePost}}>{children}</Postitem.Provider>
    
    </>)
}
const Default_Post_List=[{

  id: "1",
  title: "Go to Mumbai",
  body: "I going to mumbai for vacation",
  reaction: 2,
  userid:"user-9",
  tags:["vacation","mumbai","Enjoying"],
},
{

 id: "2",
title: "Pass ho gaye",
body: "4 saal ki mehanat se pass ho gaye",
reaction: 2,
userid:"user-9",
tags:["Graduating","Unbelievable"],
}


]

export default PostListProvider;