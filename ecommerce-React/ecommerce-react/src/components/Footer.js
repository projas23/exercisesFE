import logo from './assets/images/index/logo.png';

const Footer = () => {
    return ( 
        <footer className="footer mt-auto py-3 bg-light">
        <div className="container-fluid m-2">
          <a>
            <img src={logo} className="rounded" alt="logo" width={30}
            height={30} />
          </a>
          <span className="text-muted">
            <i>Camera Master's "Your one-stop shop for all your camera needs."</i>
          </span>
        </div>
      </footer>
      
     );
}
 
export default Footer;