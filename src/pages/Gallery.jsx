import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace these sample image paths with your actual photographs
  const photos = [
    {
      id: 1,
      src: "/images/couple1.jpg",
      category: "Pre-wedding",
      alt: "Beautiful pre-wedding couple portrait",
      size: "large",
    },
    {
      id: 2,
      src: "/images/bride1.jpg",
      category: "Pre-wedding",
      alt: "Bride portrait",
      size: "normal",
    },
    {
      id: 3,
      src: "/images/couple2.jpg",
      category: "Traditional",
      alt: "Traditional wedding portrait",
      size: "normal",
    },
    {
      id: 4,
      src: "/images/groom1.jpg",
      category: "Traditional",
      alt: "Groom portrait",
      size: "normal",
    },
    {
      id: 5,
      src: "/images/couple3.jpg",
      category: "Traditional",
      alt: "Traditional wedding couple",
      size: "large",
    },
    {
      id: 6,
      src: "/images/bride2.jpg",
      category: "White Wedding",
      alt: "Bride in her wedding dress",
      size: "normal",
    },
    {
      id: 7,
      src: "/images/couple4.jpg",
      category: "White Wedding",
      alt: "Bride and groom together",
      size: "normal",
    },
    {
      id: 8,
      src: "/images/celebration.jpg",
      category: "Celebration",
      alt: "Wedding celebration",
      size: "normal",
    },
    {
      id: 9,
      src: "/images/couple5.jpg",
      category: "White Wedding",
      alt: "Romantic wedding couple portrait",
      size: "large",
    },
  ];

  const categories = [
    "All",
    "Pre-wedding",
    "Traditional",
    "White Wedding",
    "Celebration",
  ];

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedImage.id,
    );

    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  const showPrevious = () => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedImage.id,
    );

    const previousIndex =
      (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;

    setSelectedImage(filteredPhotos[previousIndex]);
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-[#FFF9F8] px-4 py-16 text-blue-950 sm:px-8 lg:py-24">
        {/* Gallery Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="py-2 font-dancing text-3xl text-pink-500 sm:text-4xl">
            Every picture tells a story
          </p>

          <h1 className="py-2 font-serif text-4xl font-bold tracking-wide text-blue-950 sm:text-5xl lg:text-6xl">
            Our Beautiful Moments
          </h1>

          <div className="mx-auto my-5 h-[3px] w-20 rounded-full bg-yellow-400"></div>

          <p className="mx-auto max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            A collection of beautiful memories, precious moments, and the
            beginning of our forever. Take a look into our love story.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mx-auto mb-12 flex max-w-5xl flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImage(null);
              }}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-blue-950 bg-blue-950 text-white shadow-md"
                  : "border-pink-200 bg-white text-blue-950 hover:border-yellow-400 hover:bg-pink-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl bg-pink-100 shadow-sm ${
                photo.size === "large"
                  ? "aspect-[4/5] md:row-span-2 md:aspect-auto"
                  : "aspect-[4/5]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-950/0 transition-all duration-500 group-hover:bg-blue-950/40">
                <span className="translate-y-4 text-3xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  +
                </span>
              </div>

              {/* Category Label */}
              <div className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-xs font-semibold text-blue-950 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                {photo.category}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <div className="mx-auto mb-6 h-[2px] w-20 bg-yellow-400"></div>

          <p className="font-dancing text-3xl text-pink-500 sm:text-4xl">
            Memories to last a lifetime
          </p>

          <h2 className="mt-3 font-serif text-2xl font-semibold text-blue-950 sm:text-3xl">
            Ayooluwabami & Opemipo
          </h2>

          <p className="mt-4 text-xs font-semibold tracking-[0.4em] text-yellow-600">
            EST. FOREVER
          </p>

          <p className="mt-3 text-sm tracking-widest text-blue-950">
            16 . 01 . 2027
          </p>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-950/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute right-5 top-5 z-20 text-3xl text-white transition hover:text-pink-300"
              aria-label="Close image"
            >
              ✕
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 z-20 rounded-full bg-white/15 px-4 py-3 text-2xl text-white transition hover:bg-pink-500 sm:left-8"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Selected Image */}
            <div
              className="flex max-h-[85vh] max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl"
              />

              <p className="mt-4 text-sm tracking-wide text-white">
                {selectedImage.category}
              </p>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 z-20 rounded-full bg-white/15 px-4 py-3 text-2xl text-white transition hover:bg-pink-500 sm:right-8"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Gallery;
