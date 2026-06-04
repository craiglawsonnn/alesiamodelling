import { AnimatePresence, motion } from "framer-motion";
import {
  FaInstagram,
  FaEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaTimes,
} from "react-icons/fa";

function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="contact-modal"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="contact-modal-close"
              onClick={onClose}
              aria-label="Close contact modal"
            >
              <FaTimes />
            </button>

            <div className="contact-modal-heading">
              <p>Contact</p>
              <h2>Work with Alesia</h2>
              <span>
                For modelling shoots, creative collaborations, or booking
                enquiries.
              </span>
            </div>

            <div className="contact-options">
              <a
                href="https://www.instagram.com/alesssssiya"
                target="_blank"
                rel="noreferrer"
                className="contact-option primary-contact-option"
              >
                <span className="contact-option-icon">
                  <FaInstagram />
                </span>

                <span>
                  <strong>Instagram</strong>
                  <small>Best for quick messages and collaborations</small>
                </span>
              </a>

              <a
                href="mailto:alesy29012005@gmail.com?subject=Modelling%20Enquiry"
                className="contact-option"
              >
                <span className="contact-option-icon">
                  <FaEnvelope />
                </span>

                <span>
                  <strong>Email</strong>
                  <small>Best for bookings and professional enquiries</small>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/alesia-shlyk/"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
              >
                <span className="contact-option-icon">
                  <FaLinkedinIn />
                </span>

                <span>
                  <strong>LinkedIn</strong>
                  <small>Professional profile and networking</small>
                </span>
              </a>

              <a
                href="https://www.facebook.com/alesya.shlyk.7"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
              >
                <span className="contact-option-icon">
                  <FaFacebookF />
                </span>

                <span>
                  <strong>Facebook</strong>
                  <small>Alternative contact option</small>
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;