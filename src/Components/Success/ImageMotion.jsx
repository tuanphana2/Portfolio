import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import img1 from '../../assets/img/success/1.jpg';
import img2 from '../../assets/img/success/2.jpg';
import img3 from '../../assets/img/success/3.jpg';
import img4 from '../../assets/img/success/4.jpg';
import img5 from '../../assets/img/success/5.jpg';
import img6 from '../../assets/img/success/6.jpg';
import img7 from '../../assets/img/success/7.jpg';

// Import the CSS file
import './imageMotion.scss';

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function ImageCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(null); // Set initial index to 0

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length); // This will loop back to 0 after the last image
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length); // This will loop back to the last image after the first
  };

  return (
    <div className="relative flex justify-center items-center h-[400px] bg-gray-900 overflow-hidden">
      {/* Image Slider */}
      <motion.div
        className="flex flex-nowrap space-x-4 overflow-hidden"
        style={{ width: 'max-content' }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: 'linear',
          repeatType: 'loop', // Thêm thuộc tính này để làm cho vòng lặp liên tục
        }}
      >
        {[...images, ...images].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="carousel-image" // Áp dụng lớp CSS cho ảnh
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedIndex(index % images.length)} // Đặt lại chỉ số đã chọn khi nhấp
          />
        ))}
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed-popup" // Áp dụng class fixed-popup để căn giữa và tạo nền tối
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="full-image-container"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Nút Previous */}
              <button className="popup-nav-btn left" onClick={prevImage}>
                <FaChevronLeft size={24} />
              </button>

              {/* Ảnh phóng to */}
              <motion.img src={images[selectedIndex]} alt="Full View" className="full-image" />

              {/* Nút Next */}
              <button className="popup-nav-btn right" onClick={nextImage}>
                <FaChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
