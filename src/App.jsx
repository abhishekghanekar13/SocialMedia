import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/Head";
import Slidebar from "./Components/Slidebar";
import Footer from "./Components/Footer";
import Postcard from "./Postcard";
import PostListProvider from "./store/PostList-Store";
import "./App.css";
import CardPost from "./CardPost";

function App() {
  let [selected, setselected] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="Social-container">
          <Slidebar
            selectedtab={selected}
            handalonclick={setselected}
          ></Slidebar>
          <div className="container">
            <Heading></Heading>
            {selected === "Home" ? (
              <Postcard></Postcard>
            ) : (
              <CardPost></CardPost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}
export default App;
