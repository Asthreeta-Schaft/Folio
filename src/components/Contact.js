import { useRef } from "react";
import Swal from 'sweetalert2'
import 'animate.css';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = ( message ) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7gnggtm', 'template_zib2k9y', form.current, {
        publicKey: 'islnN9-h0C2skWNVm',
      })
      // Provide error or success text here
      .then(
       // message => alert("hi")
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
      <section className="contact" id="connect">
       <Container>
          <Row className="align-items-center">
              <Col size={12} md={6}>
                <TrackVisibility>
                {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
                </TrackVisibility>
              </Col>

    <Col size={12} md={6}>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="first_name" placeholder="First Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="last_name" placeholder="Last Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="from_email" placeholder="Email Address" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="from_num" placeholder="Phone Number" required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Please Enter Your Text Here..." required></textarea>

                      <button type="submit" value="Send"><span>Submit</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Contact