import React from "react";
const style = {
  height: "1000px",
};
export default function Background() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww&w=1000&q=80"
              style={{ height: "610px" }}
              class="d-block w-100"
              alt="mountain"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Explore the world</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
              style={{ height: "610px" }}
              class="d-block w-100"
              alt="island"
              height="100px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Explore the world</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.datocms-assets.com/32623/1649687936-plane_window_wing.jpeg"
              style={{ height: "610px" }}
              className="d-block w-100"
              alt="travel"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Explore the world</h2>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
