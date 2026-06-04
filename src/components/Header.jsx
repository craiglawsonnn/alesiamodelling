import { motion } from "framer-motion";

function Header({ onGalleryClick, onContactClick }) {
  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="logo" href="#home">
        ALESIA SHLYK
      </a>

      <nav className="nav">
        <a href="#gallery" onClick={onGalleryClick}>
          Gallery
        </a>

        <button type="button" onClick={onContactClick}>
          Contact
        </button>
      </nav>
    </motion.header>
  );
}

export default Header;