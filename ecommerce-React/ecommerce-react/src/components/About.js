import myImage from './assets/images/index/marco-xu-ToUPBCO62Lw-unsplash.jpg';

const About = () => {
    return ( 
        <div className="container mt-5">
  <h2 className="text-center">Welcome to Our Store</h2>
  <div className="row mt-4">
    <div className="col-lg-6">
    <img src={myImage} className="img-fluid rounded" alt="About Us" />
    </div>
    <div className="col-lg-6 mt-4 mt-lg-0">
      <p className="">
        At Camera Master's Shop, we believe that photography is not just about
        capturing moments, it's about creating memories. Our passion for
        photography drives us to provide our customers with the best equipment
        and advice.
      </p>
      <p>
        Since our founding in 2000, we've been at the forefront of the digital
        photography revolution. Our store offers a diverse range of cameras,
        lenses, and accessories to suit both amateur enthusiasts and
        professional photographers alike.
      </p>
      <p>
        Our team is made up of experienced photographers and knowledgeable
        experts who are always ready to help you choose the perfect gear for
        your needs. Whether you're picking out your first camera or looking to
        upgrade to the latest technology, we're here to guide you.
      </p>
      <p>
        We also offer workshops and tutorials for those looking to improve their
        skills, and our community events are a great place to meet fellow
        photography lovers.
      </p>
      <p>
        Thank you for choosing Camera Master's Shop for your photographic
        journey. We look forward to serving you and being a part of your story.
      </p>
      <br />
    </div>
  </div>
  
</div>

     );
}
 
export default About;