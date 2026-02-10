import { useState } from "react";
import * as portfolioImgs from "./../../../../../assets/portfolio/index";
import { ImageModal } from "./ImageModal";

const Portfolio = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const imgs: string[] = Object.values(portfolioImgs);

  return (
    <section className="py-20 lg:py-28 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-900">
            Professional real estate consulting, marketing, and sales services
          </p> */}
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {imgs.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className="
                group relative cursor-pointer
                overflow-hidden 
                bg-neutral-900
              "
            >
              <img
                src={img}
                alt={img}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
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

      {/* Image Modal */}
      <ImageModal image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
};

export default Portfolio;
