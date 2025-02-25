import React, { useState } from 'react'
import { BiZoomIn } from 'react-icons/bi'

const SearchResults = ({ images }) => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Open modal and set selected image
  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((img) => (
          <div key={img.id} className="relative group">
            <img src={img.largeImageURL}
              className="w-full h-64 object-cover cursor-pointer rounded-lg transition-transform duration-300 transform group-hover:scale-105"
              loading="lazy"
              onClick={() => openModal(img)} 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-sm">{img.tags}</div>
              <div className="text-xs">
                by <strong>{img.user}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full h-full max-h-[90%] overflow-hidden">
            <button
              className="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-2"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="overflow-auto max-h-[80vh]">
              <img
                src={selectedImage.largeImageURL}
                alt={selectedImage.tags}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchResults
