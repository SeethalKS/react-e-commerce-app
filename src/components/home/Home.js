import { NavLink } from "react-router-dom";
import "./Home.css";
function Home(props) {
  const imgs = props.filteredimage || [];

  // Filter images that have a valid `image` property
  const filteredArray_products = imgs.filter((f) => f.image);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide colrs">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {filteredArray_products.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {filteredArray_products.map((p, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={p.image}
                className="d-block w-180"
                alt={`Slide ${index + 1}`}
                height={300}
                width={300}
              />
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="setalign">
        <NavLink to="/product-list" className="navlink">
          <h4>Shop Now</h4>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
