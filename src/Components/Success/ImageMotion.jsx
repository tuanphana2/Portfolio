import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../../assets/img/imageMotion/bsmall1.png";
import img2 from "../../assets/img/imageMotion/bsmall2.png";

const images = [img1, img2, img1, img2];

export default function ImageCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900 overflow-hidden">
      {/* Image Slider */}
      <motion.div
        className="flex flex-nowrap space-x-6"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      >
        {[...images, ...images].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-40 h-40 cursor-pointer rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedIndex(index % images.length)}
          />
        ))}
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative flex items-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Nút Previous */}
              <button
                className="absolute left-[-50px] md:left-[-60px] p-3 text-white bg-gray-800 rounded-full hover:bg-gray-600 transition"
                onClick={prevImage}
              >
                <FaChevronLeft size={24} />
              </button>

              {/* Ảnh phóng to */}
              <motion.img
                src={images[selectedIndex]}
                alt="Full View"
                className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl"
              />

              {/* Nút Next */}
              <button
                className="absolute right-[-50px] md:right-[-60px] p-3 text-white bg-gray-800 rounded-full hover:bg-gray-600 transition"
                onClick={nextImage}
              >
                <FaChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
