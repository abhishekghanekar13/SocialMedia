import { useContext } from "react";
import Card from "./Components/card"
import { Postitem } from "./store/PostList-Store";
let Postcard=()=>{
   let {postlist}= useContext(Postitem)
    return(<>
    {
       postlist.map((list)=><Card key={list.id} list={list}></Card>)
    }


    

    </>)
}
export default Postcard;