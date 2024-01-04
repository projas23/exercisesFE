const Contact = () => {
    return ( 
        <div className="container mt-5">
  <h2 className="text-center">Contact Us</h2>
  <p className="text-center text-muted">
    Have questions? We would love to hear from you. Get in touch with us and
    we'll respond as soon as we can.
  </p>
  <div className="row justify-content-center mt-4">
    <div className="col-md-8">
      <form>
        <div className="form-group">
          <label htmlFor="contactName">Name</label>
          <input
            type="text"
            className="form-control"
            id="contactName"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="contactEmail"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactSubject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="contactSubject"
            placeholder="Subject of your message"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactMessage">Message</label>
          <textarea
            className="form-control"
            id="contactMessage"
            rows={5}
            placeholder="Your message"
            defaultValue={""}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>

     );
}
 
export default Contact;