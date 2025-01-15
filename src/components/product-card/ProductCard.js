import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import "./ProductCard.css";

function ProductCard(props) {
  var prod = props.productcardattri;

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    addToCart(prod);
  };
  return (
    <div className="items1">
      <Link to={"/product/" + prod.id} className="navlink">
        <div>
          <div>
            <img src={prod.image} alt="" height={100}></img>
          </div>
          <div style={{ paddingBottom: "5px" }}>
            {/* <div><NavLink to={"/product/" + prod.id} className="navlink">
              {prod.title}
            </NavLink></div> */}
          </div>
          <div
            style={{
              color: "blue",
              textDecorationLine: "none",
              paddingBottom: "5px",
            }}
          >
            +3 colors/patterns
          </div>
          <div style={{ paddingBottom: "5px" }}>
            Sponsered
            <i className="fa-solid fa-circle-exclamation  fa-sm bgcolor"></i>
          </div>
          <div>{prod.category}</div>
          <div>
            {" "}
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star yellow-star"></i>
            <i className="fa-solid fa-star bordered-star"></i>
          </div>
          <div style={{ color: "red", textDecoration: "line-through" }}>
            Save 50%
          </div>
          <div style={{ paddingBottom: "5px", fontSize: "15px" }}>
            <sup>
              <i className="fa-solid fa-indian-rupee-sign"></i>
            </sup>
            <span style={{ fontSize: "32px", fontWeight: "bold" }}>
              {prod.price}
            </span>{" "}
            M.R.P. 999
          </div>
          <div style={{ paddingBottom: "5px" }}>
            FREE Delivery for Prime members
          </div>
          {/* <Link to={"/product/" + prod.id} className="navlink">
            Details<i class="fa-regular fa-hand-point-right"></i>
          </Link> */}
        </div>
      </Link>
      <div>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
