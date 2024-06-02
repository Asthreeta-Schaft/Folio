import { useRef } from "react";
import Swal from 'sweetalert2'
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const Newsletter = ({ status, message }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vzono9n', 'template_nve552a', form.current, {
        publicKey: 'islnN9-h0C2skWNVm',
      })
      // Provide error or success text here
      .then(
        message => {
           Swal.fire({
             title: "Great!",
             text: "Your details are submitted successfully!",
             icon: "success"
           });
         }
        
       );
  };

  return (
    <Col lg={12}>
    <div className="newsletter-bx wow slideInUp">
      <Row>
        <Col lg={12} md={6} xl={5}>
          <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
        </Col>
        <Col md={6} xl={7}>

    <form ref={form} onSubmit={sendEmail}>
      <div className="new-email-bx">
        <input type="email" name="from_email" placeholder='Please Enter Your Email Here...' required/>
        <button type="submit" value="Send">Submit</button>
      </div>
    </form>

    </Col>
      </Row>
    </div>
  </Col>
  );
};