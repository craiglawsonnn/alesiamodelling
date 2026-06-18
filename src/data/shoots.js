const base = import.meta.env.BASE_URL;

const imagePath = (fileName) => `${base}images/${fileName}`;

export const shoots = [
  {
    id: "krakow-2025",
    title: "KRAKOW 2025",
    photographer: "PHOTOGRAPHER: GENNA @GENNA",
    variant: "pink",
    imageSide: "right",
    heroImage: imagePath("hero-1.jpg"),
    previewImages: [
      imagePath("hero-2.jpg"),
      imagePath("hero-3.png"),
      imagePath("hero-1.jpg"),
    ],
    galleryImages: [
      imagePath("hero-1.jpg"),
      imagePath("hero-2.jpg"),
      imagePath("hero-3.png"),
    ],
  },

  {
    id: "krakow-closeups",
    title: "KRAKOW CLOSE-UPS",
    photographer: "PHOTOGRAPHER: GENNA @GENNA",
    variant: "dark",
    imageSide: "left",
    heroImage: imagePath("hero-2.jpg"),
    previewImages: [
      imagePath("hero-1.jpg"),
      imagePath("hero-3.png"),
      imagePath("hero-2.jpg"),
    ],
    galleryImages: [
      imagePath("hero-1.jpg"),
      imagePath("hero-2.jpg"),
      imagePath("hero-3.png"),
    ],
  },

  {
    id: "fifties-style",
    title: "50S STYLE",
    photographer: "PHOTOGRAPHER: GENNA @GENNA",
    variant: "cream",
    imageSide: "right",
    heroImage: imagePath("50s-1.jpg"),
    previewImages: [
      imagePath("50s-2.jpg"),
      imagePath("50s-3.jpg"),
      imagePath("50s-4.jpg"),
    ],
    galleryImages: [
      imagePath("50s-1.jpg"),
      imagePath("50s-2.jpg"),
      imagePath("50s-3.jpg"),
      imagePath("50s-4.jpg"),
    ],
  },

  {
    id: "curly-hair",
    title: "CURLY HAIR",
    photographer: "PHOTOGRAPHER: GENNA @GENNA",
    variant: "warm",
    imageSide: "left",
    heroImage: imagePath("curly-1.jpg"),
    previewImages: [
      imagePath("curly-2.jpg"),
      imagePath("curly-3.jpg"),
      imagePath("curly-4.jpg"),
    ],
    galleryImages: [
      imagePath("curly-1.jpg"),
      imagePath("curly-2.jpg"),
      imagePath("curly-3.jpg"),
      imagePath("curly-4.jpg"),
      imagePath("curly-5.jpg"),
    ],
  },

  {
    id: "desert",
    title: "DESERT",
    photographer: "PHOTOGRAPHER: GENNA @GENNA",
    variant: "sand",
    imageSide: "right",
    heroImage: imagePath("desert-1.jpg"),
    previewImages: [
      imagePath("desert-2.jpg"),
      imagePath("desert-1.jpg"),
      imagePath("desert-2.jpg"),
    ],
    galleryImages: [
      imagePath("desert-1.jpg"),
      imagePath("desert-2.jpg"),
    ],
  },

  {
    id: "glow",
    title: "GLOW",
    photographer: "PHOTOGRAPHER: GENNA @GENNA",
    variant: "glow",
    imageSide: "left",
    heroImage: imagePath("Glow-1.jpg"),
    previewImages: [
      imagePath("Glow-2.jpg"),
      imagePath("Glow-3.jpg"),
      imagePath("Glow-4.jpg"),
    ],
    galleryImages: [
      imagePath("Glow-1.jpg"),
      imagePath("Glow-2.jpg"),
      imagePath("Glow-3.jpg"),
      imagePath("Glow-4.jpg"),
      imagePath("Glow-5.jpg"),
    ],
  },

  {
    id: "serious",
    title: "SERIOUS",
    photographer: "PHOTOGRAPHER: GENNA @GENNA",
    variant: "mono",
    imageSide: "right",
    heroImage: imagePath("Serious-1.jpg"),
    previewImages: [
      imagePath("Serious-2.jpg"),
      imagePath("Serious-1.jpg"),
      imagePath("Serious-2.jpg"),
    ],
    galleryImages: [
      imagePath("Serious-1.jpg"),
      imagePath("Serious-2.jpg"),
    ],
  },

  {
    id: "splat",
    title: "SPLAT",
    photographer: "PHOTOGRAPHER: GENNA @GENNA",
    variant: "splat",
    imageSide: "left",
    heroImage: imagePath("splat-1.jpg"),
    previewImages: [
      imagePath("splat-2.jpg"),
      imagePath("splat-4.jpg"),
      imagePath("splat-7.jpg"),
    ],
    galleryImages: [
      imagePath("splat-1.jpg"),
      imagePath("splat-2.jpg"),
      imagePath("splat-3.jpg"),
      imagePath("splat-4.jpg"),
      imagePath("splat-5.jpg"),
      imagePath("splat-6.jpg"),
      imagePath("splat-7.jpg"),
      imagePath("splat-8.jpg"),
      imagePath("splat-9.jpg"),
    ],
  },
];