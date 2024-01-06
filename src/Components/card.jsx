import { useContext } from "react";
import { Postitem } from "../store/PostList-Store";
let Card = ({ list }) => {
  let { deletePost } = useContext(Postitem);
  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{list.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge
           rounded-pill bg-danger"
            onClick={() => deletePost(list.id)}
          >
            <i className="bi bi-backspace-reverse">Delete</i>
          </span>

          <p className="card-text">{list.body}</p>
          {list.tags.map((tag) => (
            <button type="button" className="btn btn-primary btn">
              {tag}
            </button>
          ))}
          <div className="alert alert-info alert" role="alert">
            This post has been reacted by {list.reaction} people.
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
