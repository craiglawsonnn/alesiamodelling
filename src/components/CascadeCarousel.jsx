import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CascadeCarousel({ images = [], onActiveImageChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  useEffect(() => {
    if (!images.length || !onActiveImageChange) return;

    onActiveImageChange(images[activeIndex]);
  }, [activeIndex, images, onActiveImageChange]);
  if (!images.length) return null;

  const getPosition = (index) => {
    const total = images.length;
    const previousIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    if (index === activeIndex) return "active";
    if (index === previousIndex) return "previous";
    if (index === nextIndex) return "next";

    return "hidden";
  };

  const variants = {
    active: {
      x: "-50%",
      y: "-50%",
      scale: 1,
      opacity: 1,
      filter: "blur(0px) brightness(1)",
      zIndex: 3,
      rotateY: 0,
    },
    previous: {
      x: "-88%",
      y: "-50%",
      scale: 0.78,
      opacity: 0.72,
      filter: "blur(1.5px) brightness(0.68)",
      zIndex: 2,
      rotateY: 12,
    },
    next: {
      x: "-12%",
      y: "-50%",
      scale: 0.78,
      opacity: 0.72,
      filter: "blur(1.5px) brightness(0.68)",
      zIndex: 2,
      rotateY: -12,
    },
    hidden: {
      x: "-50%",
      y: "-50%",
      scale: 0.55,
      opacity: 0,
      filter: "blur(4px) brightness(0.5)",
      zIndex: 1,
      rotateY: 0,
    },
  };

  return (
    <div
      className="cascade-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="cascade-stage">
        {images.map((image, index) => (
          <motion.button
            type="button"
            key={`${image}-${index}`}
            className="cascade-card"
            variants={variants}
            initial={false}
            animate={getPosition(index)}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image} alt="" />
          </motion.button>
        ))}
      </div>

      <div className="cascade-dots">
        {images.map((image, index) => (
          <button
            key={`${image}-dot-${index}`}
            type="button"
            className={index === activeIndex ? "dot active-dot" : "dot"}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CascadeCarousel;