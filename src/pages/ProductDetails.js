import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>

      <p>{params.productsId}</p>
      <p>
        <Link to=".." relative="route">
          Back
        </Link>
      </p>
    </>
  );
}
export default ProductDetails;
