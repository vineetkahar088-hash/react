// import "./LaptopCard.css";
// import { useParams } from "react-router-dom";
// import { data } from "../utils/Data";
// import { useNavigate } from "react-router-dom";
// function LaptopCard({ product, productWithDetails, renderStars, mySelctedCategory, handleProductSingle }) {
//   const navigate = useNavigate();
//   const params = useParams();
//   const categoryName = params.categoryName;
//   const cid = params.id;
//   // console.log(mySelctedCategory)
//   // const mySelctedCategory = data?.find((category) => category?.categoryName === categoryName);

//   if (!mySelctedCategory) {
//     return <p>No category selected!</p>;
//   }

//   return (
//     <div className="laptop-card">
//       <h2 className="laptop-title">{product?.productName}</h2>

//       <div className="rating">
//         {/* <div className="stars">{renderStars(productWithDetails.rating)}</div> */}
//         <span className="rating-count">
//           ({product.productRating} reviews)
//         </span>
//       </div>

//       <div className="price-section">
//         <span className="price">
//           ₹{product?.price}
//           <span className="price-currency">.00</span>
//         </span>
//       </div>

//       <button className="details-btn" onClick={() => {
//         handleProductSingle(product)
//         navigate(`/laptop-detail/category/${categoryName}/${cid}/product/${product?.productName}/${product?.productId}`)
//       }}>View More Details</button>
//     </div>
//   );
// }

// export default LaptopCard;











import "./LaptopCard.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LaptopCard({ product, productWithDetails, renderStars, mySelctedCategory, handleProductSingle }) {
  const navigate = useNavigate();
  const params = useParams();
  const categoryName = params?.categoryName;
  const cid = params?.id;

  if (!mySelctedCategory) {
    return <p>No category selected!</p>;
  }

  return (
    <div className="laptop-card">
      <h2 className="laptop-title">{product?.productName ?? "Unknown Product"}</h2>

      <div className="rating">
        {/* Optional chaining for renderStars */}
        {/* <div className="stars">{renderStars?.(productWithDetails?.rating)}</div> */}
        <span className="rating-count">
          ({product?.productRating ?? 0} reviews)
        </span>
      </div>

      <div className="price-section">
        <span className="price">
          ₹{product?.price ?? "N/A"}
          <span className="price-currency">.00</span>
        </span>
      </div>

      <button
        className="details-btn"
        onClick={() => {
          handleProductSingle?.(product);
          navigate(
            `/laptop-detail/category/${categoryName ?? "unknown"}/${cid ?? "0"}/product/${product?.productName ?? "unknown"}/${product?.productId ?? "0"}`
          );
        }}
      >
        View More Details
      </button>
    </div>
  );
}

export default LaptopCard;
