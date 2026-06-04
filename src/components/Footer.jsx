import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="footer"
      id="contact"
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <p>Let&apos;s work together</p>

      <div className="socials">
        <a
          href="https://www.instagram.com/alesssssiya"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/alesia-shlyk/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.facebook.com/alesya.shlyk.7"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
      </div>
    </motion.footer>
  );
}

export default Footer;