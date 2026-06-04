function FloatingGalleryButton({ isVisible, sourceShootId }) {
  if (!isVisible) return null;

  const handleClick = () => {
    if (sourceShootId) {
      const shootSection = document.getElementById(sourceShootId);

      if (shootSection) {
        shootSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }
    }

    const topSection = document.querySelector("main section");

    if (topSection) {
      topSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      type="button"
      className="floating-gallery-button"
      onClick={handleClick}
    >
      {sourceShootId ? "Back to shoot" : "Back to top"}
    </button>
  );
}

export default FloatingGalleryButton;