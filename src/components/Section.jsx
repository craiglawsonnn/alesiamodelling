import { useState } from "react";
import { motion } from "framer-motion";
import CascadeCarousel from "./CascadeCarousel";

function Section({
  id,
  variant,
  title,
  subtitle,
  image,
  previewImages = [],
  imageSide = "right",
  imagePosition = "center",
  onViewShoot,
}) {
  const [activeCarouselImage, setActiveCarouselImage] = useState(
    previewImages[0] || image
  );

  const handleViewShoot = () => {
    if (onViewShoot) {
      onViewShoot(id, activeCarouselImage);
    }
  };

  return (
    <section
      id={id}
      className={`section section-${variant} image-${imageSide}`}
    >
      <motion.div
        className="section-info"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-content">
          <div className="section-heading">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{
                duration: 0.7,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {subtitle}
            </motion.p>
          </div>

          <div className="section-preview-area">
            <CascadeCarousel
              images={previewImages}
              onActiveImageChange={setActiveCarouselImage}
            />

            <button
              type="button"
              className="view-shoot-button"
              onClick={handleViewShoot}
            >
              View full shoot
            </button>
          </div>
        </div>
      </motion.div>

      <div className="section-image-wrap">
        <motion.img
          src={image}
          alt="Alesia portrait"
          className="section-image"
          style={{ objectPosition: imagePosition }}
          initial={{ scale: 1.06, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.025 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}

export default Section;