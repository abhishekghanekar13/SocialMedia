import { useContext } from "react";
import Card from "./Components/card"
import { Postitem } from "./store/PostList-Store";
import WelcomeMessage from "./Components/WelcomeMessage";
let Postcard=()=>{
   let {postlist,addInitialPost}= useContext(Postitem)

   let handonclick=()=>{
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data)=>{
         addInitialPost(data.posts)
      });
   }
    return(<>
    {
      postlist.length===0&&<WelcomeMessage handonclick={handonclick} />
    }
    {
       postlist.map((list)=><Card key={list.id} list={list}></Card>)
    }


    

    </>)
}
export default Postcard;