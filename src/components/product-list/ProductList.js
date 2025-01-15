import ProductCard from "../product-card/ProductCard";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./ProductList.css";

function ProductList(props) {
  const search_text = props.search_text;

  const productlist = props.productlist;

  const filteredArray_products = productlist.filter((f) => {
    return f.title.toLowerCase().includes(search_text.toLowerCase());
  });

  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="container">
        {filteredArray_products.map((p) => {
          return (
            <ProductCard
              key={p.id}
              productcardattri={p}
              addToCart={addToCart}
            ></ProductCard>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
