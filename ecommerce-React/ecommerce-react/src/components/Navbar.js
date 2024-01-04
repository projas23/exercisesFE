import { Link } from 'react-router-dom'
import logo from './assets/images/index/logo.png';


const NavBar = () => {
    return ( 
        <>
  <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <nav className="navbar navbar">
      <div>
        <Link className="navbar-brand" to="/">
        <img src={logo} className="img-fluid rounded" alt="logo" width={70}
            height={70} />
        </Link>
      </div>
    </nav>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
      </ul>
    </div>
    {/*  Modal Trigger */}
    <button
      type="button"
      className="btn btn-primary m-2"
      data-bs-toggle="modal"
      data-bs-target="#loginModal"
    >
      Login
    </button>
  </nav>
  {/*  Modal */}
  <div
    className="modal fade"
    id="loginModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="loginModalLabel">
            Login
          </h5>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</>


     );
}
 
export default NavBar;