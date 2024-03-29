const Slidebar = ({selectedtab,handalonclick}) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark slidebar"
        style={{width: "180px"}}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4 container" >Social-Media</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={()=>handalonclick("Home")}>
            <a href="#" className= {`nav-link text-white ${selectedtab==="Home" && "active"}`}  aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li onClick={()=>handalonclick("CreatePost")}>
            <a href="#" className={`nav-link text-white ${selectedtab==="CreatePost" && "active"}`}>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              CreatePost
            </a>
          </li>
          </ul>
        </div>
      
    </>
  );
};

export default Slidebar;
