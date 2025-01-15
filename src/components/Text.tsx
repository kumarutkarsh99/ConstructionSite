import "./App.css";

function Text() {
  return (
    <div className="text-bg container-fluid mt-0 mb-0">
      <div className="mx-3 mb-2 py-2">
        <h1>From the Desk</h1>
      </div>
      <div className="boxtext row mx-1">
        <div className="fullbox fullbox1 col-md-6">
          <div className="picbox row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">
                Founder
              </strong>
              <h4 className="my-1 pt-2">Vikram Singh</h4>
              <div className="mb-1 text-body-secondary">
                Building Dreams, Together
              </div>
              <p className="card-text mb-auto pt-2">
                "At India Constructions, we view every project as an opportunity
                to make a lasting impact on the world."
              </p>
            </div>
            <div className="col-auto d-block">
              <img
                className="ppl-image bd-placeholder-img"
                src="https://img.freepik.com/premium-photo/portrait-young-indian-business-man-black-suit-black-isolated-background_115086-1614.jpg"
                alt="Thumbnail"
              />
            </div>
          </div>
        </div>
        <div className="fullbox col-md-6">
          <div className="picbox row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success-emphasis">
                CEO
              </strong>
              <h4 className="mb-0 pt-2">Simran Malhotra</h4>
              <div className="my-1 text-body-secondary">
                A Vision in Construction
              </div>
              <p className="mb-auto pt-2">
                "As a company, we strive to maintain the highest standards of
                quality and innovation in every project we undertake."
              </p>
            </div>
            <div className="col-auto d-block">
              <img
                className="ppl-image bd-placeholder-img"
                src="https://img.freepik.com/premium-photo/attractive-indian-women-formal-wear_416902-2377.jpg"
                alt="Thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
