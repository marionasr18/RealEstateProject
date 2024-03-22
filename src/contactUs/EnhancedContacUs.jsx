import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import "./ContactUs.css"

export default function EnhancedContacUs() {

  const STATE = {
    fullName: '',
    emailAddress: '',
    subject: '',
    message: '',
  }
  const [state, setState] = useState(STATE)

  const handleChange = useCallback((e) => {
    setState(prv => {
      return {
        ...prv,
        [e.target.name]: e.target.value,
      }
    })
  }, [])
  return (
    <>
      <div className="contact-page section" style={{ overflowY: 'auto', height: '90vh' }} >
        <div className="EnhacedMaincontainer">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
              <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website.
                Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="item phone">
                    <img src="assets/images/phone-icon.png" alt="" style={{ maxWidth: '52px' }} />
                    <h6>010-020-0340<br /><span>Phone Number</span></h6>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item email">
                    <img src="assets/images/email-icon.png" alt="" style={{ maxWidth: '52px' }} />
                    <h6>info@villa.co<br /><span>Business Email</span></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="name">Full Name</label>
                      <input type="name" name="fullName" onChange={handleChange} value={state.fullName} placeholder="Your Name..." required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email Address</label>
                      <input type="text" name="email" id="email" onChange={handleChange} value={state.email} pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Subject</label>
                      <input type="subject" name="subject" onChange={handleChange} value={state.subject} id="subject" placeholder="Subject..." />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" onChange={handleChange} value={state.message} placeholder="Your Message"></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" onChange={handleChange} className="orange-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="col-lg-12">
              <div id="map">
                <iframe src="https://www.google.com/maps/@33.8558976,35.5237888,14z?entry=ttu" width="100%" height="500px" style={{ border: '0', borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }} ></iframe>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>

  )
}