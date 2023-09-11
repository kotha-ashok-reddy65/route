import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  //useNavigate() is used to changing the locations
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go To this link <Link to="/products">click</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
export default HomePage;
