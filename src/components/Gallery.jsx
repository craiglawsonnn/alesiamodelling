import { motion } from "framer-motion";

function Gallery({ shoots, highlightedGalleryImage }) {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-heading">
          <h2>Gallery</h2>
          <p>Selected work by shoot</p>
        </div>

        {shoots.map((shoot) => (
          <div className="shoot-gallery-block" id={`${shoot.id}-gallery`} key={shoot.id}>
            <div
                className={
                highlightedGalleryImage?.shootId === shoot.id
                    ? "shoot-gallery-heading highlighted-shoot-heading"
                    : "shoot-gallery-heading"
                }
            >
                <h3>{shoot.title}</h3>
                <p>{shoot.photographer}</p>
            </div>

            <div className="masonry-grid">
              {shoot.galleryImages.map((image, index) => (
                <motion.button
                    type="button"
                    data-shoot-id={shoot.id}
                    data-image-src={image}
                    className={
                        highlightedGalleryImage?.shootId === shoot.id &&
                        highlightedGalleryImage?.image === image
                        ? "gallery-image-button highlighted-gallery-image"
                        : "gallery-image-button"
                    }
                    key={`${shoot.id}-${image}-${index}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    >
                    <img src={image} alt={`${shoot.title} ${index + 1}`} />
                    </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;