import Header from "./components/Header";
import Section from "./components/Section";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { shoots } from "./data/shoots";
import { useEffect, useState } from "react";
import FloatingGalleryButton from "./components/FloatingGalleryButton";
import ContactModal from "./components/ContactModal";
import "./index.css";

function App() {
  const [highlightedGalleryImage, setHighlightedGalleryImage] = useState(null);
  const [gallerySourceShootId, setGallerySourceShootId] = useState(null);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleViewShoot = (shootId, image) => {
    setHighlightedGalleryImage({
      shootId,
      image,
    });

    setGallerySourceShootId(shootId);

    window.setTimeout(() => {
      const isMobile = window.matchMedia("(max-width: 799px)").matches;

      if (isMobile) {
        const fallbackShootGallery = document.getElementById(`${shootId}-gallery`);

        if (fallbackShootGallery) {
          fallbackShootGallery.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        return;
      }

      const matchingImage = document.querySelector(
        `[data-shoot-id="${shootId}"][data-image-src="${image}"]`
      );

      if (matchingImage) {
        matchingImage.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      }

      const fallbackShootGallery = document.getElementById(`${shootId}-gallery`);

      if (fallbackShootGallery) {
        fallbackShootGallery.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      const gallerySection = document.getElementById("gallery");

      if (gallerySection) {
        gallerySection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 80);

    window.history.replaceState(null, "", window.location.pathname);
  };

  useEffect(() => {
    const gallerySection = document.getElementById("gallery");

    if (!gallerySection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGalleryVisible(entry.isIntersecting);

        if (!entry.isIntersecting) {
          setGallerySourceShootId(null);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(gallerySection);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="app">
      <Header
        onGalleryClick={() => setGallerySourceShootId(null)}
        onContactClick={() => setIsContactOpen(true)}
      />

      <main>
        {shoots.map((shoot, index) => (
          <Section
            key={shoot.id}
            id={shoot.id}
            variant={shoot.variant}
            title={shoot.title}
            subtitle={shoot.photographer}
            image={shoot.heroImage}
            previewImages={shoot.previewImages}
            imageSide={shoot.imageSide || (index % 2 === 0 ? "right" : "left")}
            imagePosition="center top"
            onViewShoot={handleViewShoot}
          />
        ))}

        <Gallery
          shoots={shoots}
          highlightedGalleryImage={highlightedGalleryImage}
        />
      </main>

      <FloatingGalleryButton
        isVisible={isGalleryVisible}
        sourceShootId={gallerySourceShootId}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      
      <Footer />
    </div>
  );
}

export default App;