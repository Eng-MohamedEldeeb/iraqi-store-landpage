import { useState } from "react";
import ImageModal from "./Components/ImageModal";
import * as galleryImgs from "./../../../assets/gallery/index";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imgs = [
    { id: 1, src: galleryImgs.img1 },
    { id: 2, src: galleryImgs.img2 },
    { id: 3, src: galleryImgs.img3 },
    { id: 4, src: galleryImgs.img4 },
    { id: 5, src: galleryImgs.img5 },
    { id: 6, src: galleryImgs.img6 },
    { id: 7, src: galleryImgs.img7 },
    { id: 8, src: galleryImgs.img8 },
    { id: 9, src: galleryImgs.img9 },
    { id: 10, src: galleryImgs.img10 },
    { id: 11, src: galleryImgs.img11 },
    { id: 12, src: galleryImgs.img12 },
    { id: 13, src: galleryImgs.img13 },
    { id: 14, src: galleryImgs.img14 },
  ];

  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <h2 className="text-amber-600 text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-neutral-400 text-lg">
            A selection of our recent visual work
          </p>
        </div>

        <div
          className="
          grid gap-14
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
        "
        >
          {imgs.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.src)}
              className="
                group relative cursor-pointer
                overflow-hidden 
                bg-neutral-900
              "
            >
              <img
                src={img.src}
                alt={img.src}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              <div
                className="
                absolute inset-0
                bg-black/50
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
                flex items-center justify-center
              "
              >
                <i className="fa-solid fa-expand text-white text-xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default Gallery;
