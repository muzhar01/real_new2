import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo3.png";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState(""); // State to manage email input
  const [status, setStatus] = useState(""); // State to manage status messages

  // Function to send email
  const sendEmail = async () => {
    if (!email) {
      setStatus("Please enter an email address.");
      return;
    }

    try {
      const API_URL = "http://localhost:3000"; // Node.js server URL
      const emailData = {
        to: email, // Using the email from the input field
        subject: "Test Email 2",
        text: "This is a test email",
        html: "<p>This is a test email from Ataul Mohsin</p>",
      };

      setStatus("Sending email...");
      const response = await axios.post(`${API_URL}/send-email`, emailData);
      setStatus("Email sent successfully!");

      return response.data;
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email.");
    }
  };

  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" />
              </Link>
              <div className="footer__single-meta ">
                <Link
                  href="https://www.google.com/maps/place/Media+Foundation+Building/../..33.6950944,73.0486352,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfc8b476e783:0x1ad4388535624284!8m2!3d33.69509!4d73.0512101!16s%2Fg%2F11_k2bf5k?entry=ttu"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  Lower Ground Floor, Media Foundation Building, G-8 Markaz,
                  Islamabad, Pakistan
                </Link>
                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  (051) 610-3440
                </Link>
                <Link href="mailto:info../..realitai.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  info../..realitai.net
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="contact-us" className="btn btn--secondary">
                  book a call now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>discover</h5>
              </div>
              <div className="footer__single-meta">
                <ul>
                  <li>
                    <Link href="about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="client-feedback">Award Winning</Link>
                  </li>
                  <li>
                    <Link href="blog">News & Blog</Link>
                  </li>
                  <li>
                    <Link href="contact-us">careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Subscribe our newsletter</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  Welcome to REALITAI We specialize in helping business most
                  like yours succeed online.
                </p>
                <div className="footer__single-forms">
                  <div className="input-email">
                    <input
                      type="email"
                      name="subscribe-news"
                      id="subscribeNews"
                      placeholder="Enter Your Email"
                      value={email} // Bind the input value to the state
                      onChange={(e) => setEmail(e.target.value)} // Update state on change
                      required
                    />
                    <button onClick={sendEmail} className="subscribe">
                      <i className="fa-sharp fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> A Venture by{" "}
                      <Link href="#" target="_blank">
                        Realitai{" "}
                      </Link>
                      . All Rights Reserved
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-lg-4"
                  style={{ position: "relative", zIndex: "200" }}
                >
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
