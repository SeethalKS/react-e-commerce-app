import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

import Cart from "./components/cart/Cart";
import ProductList from "./components/product-list/ProductList";
import ProductDetail from "./components/product-detail/ProductDetail";
import NotFound from "./components/not-found/NotFound";
import { Route, Routes } from "react-router-dom";
import CartContext from "./context/CartContext";
import { useState, useEffect } from "react";

function App() {
  const [search_text, setsearchText] = useState("");
  function onSearchText(text) {
    console.log(text);
    setsearchText(text);
  }
  /* */
  const [productlist, setproductlistfunc] = useState([]);
  function loadProducts() {
    fetch("https://fakestoreapi.com/products").then((response) => {
      response.json().then((data) => {
        setproductlistfunc(data);
      });
    });
  }
  useEffect(() => {
    loadProducts();
  }, []);
  /* */

  const filteredimage = productlist;

  /*  */
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });

    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  /*  */

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
      }}
    >
      <div>
        <Header onSearchText={onSearchText} />
        <Routes>
          <Route path="/" element={<Home filteredimage={filteredimage} />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/product-list"
            element={
              <ProductList
                search_text={search_text}
                productlist={productlist}
              />
            }
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
