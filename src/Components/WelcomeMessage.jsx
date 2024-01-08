let WelcomeMessage = ({handonclick}) => {
  return (
    <>
      <center className="welcome-style">
        <h1>There are no post</h1>
        <button type="button" className="btn btn-primary"  onClick={handonclick}>Get post from server</button>
      </center>
    </>
  );
};

export default WelcomeMessage;
