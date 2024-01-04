import image1 from './assets/images/products/image1.jpg';
import image2 from './assets/images/products/image2.jpg';
import image3 from './assets/images/products/image3.jpg';
import image4 from './assets/images/products/image4.jpg';
import image5 from './assets/images/products/image5.jpg';
import image6 from './assets/images/products/image6.jpg';
import image7 from './assets/images/products/image7.jpg';
import image8 from './assets/images/products/image8.jpg';
import image9 from './assets/images/products/image9.jpg';

const Products = () => {
    return ( 
        <>
  <div className="container mt-4">
    <h2>Our Products</h2>
    <p>Explore our wide range of cameras and accessories.</p>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
        <img src={image1} className="card-img-top rounded" alt="Camera Image" />
          <div className="card-body">
            <h5 className="card-title">DSLR Camera 1</h5>
            <p className="card-text">
              High-quality DSLR camera with advanced features. Great starter
              camera.
            </p>
            <p className="card-text">
              <strong>Price:</strong> $999
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
        <img src={image2} className="card-img-top rounded" alt="Camera Image" />
          <div className="card-body">
            <h5 className="card-title">DSLR Camera 2</h5>
            <p className="card-text">
              Versatile DSLR for both beginners and professionals.
            </p>
            <p className="card-text">
              <strong>Price:</strong> $850
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
        <img src={image3} className="card-img-top rounded" alt="Camera Image" />
          <div className="card-body">
            <h5 className="card-title">Film Camera 1</h5>
            <p className="card-text">
              Classic film camera for the photography purist. Beautiful images,
              compact camera.
            </p>
            <p className="card-text">
              <strong>Price:</strong> $450
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="card">
        <img src={image4} className="card-img-top rounded" alt="Camera Image" />
          <div className="card-body">
            <h5 className="card-title">Film Camera 2</h5>
            <p className="card-text">
              Retro-style film camera with modern features.
            </p>
            <p className="card-text">
              <strong>Price:</strong> $500
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="card">
        <img src={image5} className="card-img-top rounded" alt="SD Image" />
          <div className="card-body">
            <h5 className="card-title">SD Card 32GB</h5>
            <p className="card-text">
              Fast and reliable 32GB SD card. Great for starters
            </p>
            <p className="card-text">
              <strong>Price:</strong> $30
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="card">
        <img src={image6} className="card-img-top rounded" alt="SD Image" />
          <div className="card-body">
            <h5 className="card-title">SD Card 64GB</h5>
            <p className="card-text">
              High-capacity 64GB SD card for extended shooting.
            </p>
            <p className="card-text">
              <strong>Price:</strong> $50
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="card">
        <img src={image7} className="card-img-top rounded" alt="Tripod Image" />
          <div className="card-body">
            <h5 className="card-title">Camera Tripod</h5>
            <p className="card-text">
              Sturdy and portable tripod for stable shooting.
            </p>
            <p className="card-text">
              <strong>Price:</strong> $60
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="card">
        <img src={image8} className="card-img-top rounded" alt="Bag Image" />
          <div className="card-body">
            <h5 className="card-title">Camera Bag</h5>
            <p className="card-text">
              Durable and stylish bag for camera and lenses.
            </p>
            <p className="card-text">
              <strong>Price:</strong> $70
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <div className="card">
        <img src={image9} className="card-img-top rounded" alt="Kit Image" />
          <div className="card-body">
            <h5 className="card-title">Studio Light Kit</h5>
            <p className="card-text">Great for long sessions.</p>
            <p className="card-text">
              <strong>Price:</strong> $100
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</>

     );
}
 
export default Products;