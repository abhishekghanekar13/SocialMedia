import {  useRef } from "react";
import { useContext } from "react";
import { Postitem } from "./store/PostList-Store";

let CardPost = () => {
 let {addPost}= useContext(Postitem)
  const userIdElement= useRef()
  const PosttitleElement= useRef()
  const PostcontantElement= useRef()
  const ReactionElement= useRef()
  const PosttagsElement= useRef()

  let handonclick=(event)=>{
    event.preventDefault();
    let userId=userIdElement.current.value;
    let Posttitle=PosttitleElement.current.value;
    let Postcontant=PostcontantElement.current.value;
    let Reaction=ReactionElement.current.value;
    let Posttags=PosttagsElement.current.value.split(" ");
    addPost(userId,Posttitle,Postcontant,Reaction,Posttags);
    userIdElement.current.value=" ";
    PosttitleElement.current.value=" ";
    PostcontantElement.current.value=" ";
    ReactionElement.current.value=" ";
    PosttagsElement.current.value=" ";
  }
  return (
    <>
      <form className="card-post" onSubmit={handonclick}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your user Id here
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="userId"
            placeholder="your user Id"
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            className="form-control"
            ref={PosttitleElement}
            id="title"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Post Contant
          </label>
          <textarea
            type="taxt"
            rows="4"
            className="form-control"
            id="body"
            ref={PostcontantElement}
            placeholder="tell us more about it"
          />
          </div>
          <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            ref={ReactionElement}
            placeholder="How many people reacted this post"
          />
         </div>
         <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={PosttagsElement}
            placeholder="please enter tags using space"
          />
         
        </div>
       
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CardPost;
