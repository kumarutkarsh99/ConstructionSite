import "./App.css";

function Carousel() {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-0"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active indicator"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="indicator"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="indicator"
        ></button>
      </div>
      <div className="carousel-inner mb-0">
        <div className="carousel-item active">
          <img
            className="carousel-image bd-placeholder-img"
            width="100%"
            height="100%"
            src="https://media1.thrillophilia.com/filestore/3tj3kbg5ge6bjdr7o7hhzjqs33mf_1488818157_tehri_dam.jpg"
            alt="Descriptive text for the image"
          />
          <div className="container">
            <div className="carousel-caption text-start">
              <p className="placename">Tehri Dam, Uttarakhand</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-image bd-placeholder-img"
            width="100%"
            height="100%"
            src="https://media.assettype.com/homegrown%2F2023-02%2F86991f41-3906-4ffd-bc37-f2cd047fdd57%2FWhatsApp_Image_2023_02_03_at_19_56_49__1_.jpeg?w=1024&auto=format%2Ccompress&fit=max"
            alt="Descriptive text for the image"
          />
          <div className="container">
            <div className="carousel-caption">
              <p className="placename">Godavari Arch Bridge, Andhra Pradesh</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-image bd-placeholder-img"
            width="100%"
            height="100%"
            src="https://www.dextragroup.com/wp-content/uploads/2023/11/kakrapar-atomic-power-station-34.jpg"
            alt="Descriptive text for the image"
          />
          <div className="container">
            <div className="carousel-caption text-end">
              <p className="placename">Kakrapar Atomic Power Plant, Gujarat</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev arrow"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
        data-bs-pause="hover"
        data-bs-interval="3000"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next arrow"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
        data-bs-pause="hover"
        data-bs-interval="3000"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
