import React from 'react'
import "./style.css"

const Contact = () => {
  return (
    <div>
        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 info">
                <i className="bx bx-map"></i>
                <h4>Address</h4>
                <p>A108 Adam Street,<br/>New York, NY 535022</p>
              </div>
              <div className="col-lg-6 info">
                <i className="bx bx-phone"></i>
                <h4>Call Us</h4>
                <p>+1 5589 55488 55<br/>+1 5589 22548 64</p>
              </div>
              <div className="col-lg-6 info">
                <i className="bx bx-envelope"></i>
                <h4>Email Us</h4>
                <p>contact@example.com<br/>info@example.com</p>
              </div>
              <div className="col-lg-6 info">
                <i className="bx bx-time-five"></i>
                <h4>Working Hours</h4>
                <p>Mon - Fri: 9AM to 5PM<br/>Sunday: 9AM to 1PM</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1671.8005551195063!2d109.3635034447366!3d-7.389652319278388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6557671d90f1e7%3A0x2bb976631ae0b46a!2sSMP%20NEGERI%201%20PURBALINGGA!5e1!3m2!1sid!2sid!4v1666673978577!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Contact