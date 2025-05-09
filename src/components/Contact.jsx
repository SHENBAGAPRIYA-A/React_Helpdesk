
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Styles.css'; // Updated CSS file

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setSubmitStatus('success');
      form.current.reset();
    }, () => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          We'd love to hear from you. Whether you have a question or just want to say hello, reach out to us.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            <div className="info-block">
              <FaPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-block">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>support@helpdesk.com</p>
              </div>
            </div>
            <div className="info-block">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>123 Support Street, San Francisco, CA 94107</p>
              </div>
            </div>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <ul>
                <li><span>Monday - Friday:</span> 9:00 AM - 6:00 PM</li>
                <li><span>Saturday:</span> 10:00 AM - 4:00 PM</li>
                <li><span>Sunday:</span> Closed</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="user_name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="user_email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" required />
              </div>
              <button type="submit" disabled={isSubmitting}>
                <FaPaperPlane className="button-icon" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && <p className="form-success">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
