function Contact() {
  return (
    <div
      className="textonpage"
      style={{
        marginTop: "70px",
      }}
    >
      <h3 className="heading">Contact Us</h3>
      <p>
        We at <strong>India Constructions</strong> are always here to assist you
        with any inquiries, feedback, or assistance regarding our services.
        Whether you're looking to discuss a project, explore business
        opportunities, or learn more about what we do, we would love to hear
        from you.
      </p>

      <h5 className="subheading">Get in Touch</h5>
      <p>
        If you have any questions or would like to get in touch with us, feel
        free to contact us through the following methods:
      </p>

      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@indiaconstructions.com">
            info@indiaconstructions.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +91-9876543210
        </li>
        <li>
          <strong>Address:</strong> India Constructions, 2nd Street, Main City,
          Mumbai, 123456
        </li>
      </ul>
      <p>
        Our dedicated team is ready to assist you with any project or inquiry
        you may have. We value your input and look forward to connecting with
        you!
      </p>

      <h5 className="subheading">Office Hours</h5>
      <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
    </div>
  );
}

export default Contact;
