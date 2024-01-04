import indexImage1 from './assets/images/index/index1.jpg';
import indexImage2 from './assets/images/index/index2.jpg';
import indexImage3 from './assets/images/index/index3.jpg';


const Home = () => {
  return (
      <>
          <div className="container mt-4">
              <p className="h1 container-fluid col-md-8 text-center">
                  Welcome to Camera Master's Shop!
              </p>
              <p className="container-fluid text-center">
                  Your one-stop shop for all your camera needs.
              </p>
          </div>
          <div className="container-fluid">
              <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img src={indexImage1} className="img-fluid w-50 rounded d-block mx-auto" alt="Film Camera image" />
                      </div>
                      <div className="carousel-item">
                          <img src={indexImage2} className="img-fluid w-50 rounded d-block mx-auto" alt="Film Camera image2" />
                      </div>
                      <div className="carousel-item">
                          <img src={indexImage3} className="img-fluid w-50 rounded d-block mx-auto" alt="Film Camera image" />
                      </div>
                  </div>
                  {/* Add carousel controls here if needed */}
              </div>
              <br />
          </div>
      </>
  );
}

export default Home;
