"use client"
import React, { useState, useEffect } from 'react';
import { gallery } from '@/data';

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Focus the modal when it opens
    if (isOpen) {
      const modalContent = document.getElementById('modal-content') as HTMLDivElement;
      modalContent?.focus();
    }
  }, [isOpen]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    if (target.id === 'modal-backdrop') {
      closeModal();
    }
  };

  return (
    <div>
      <div className="header flex justify-center mb-6">
        <h2 className="text-[#317670] scroll-m-20 border-b pb-2 text-center text-3xl w-32 font-semibold tracking-tight first:mt-0">Gallery</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-14 pb-6">
        {gallery.map((data, i) => (
          <div
            key={i}
            className="relative flex h-64 cursor-pointer max-md:flex-col overflow-hidden rounded-lg bg-white bg-clip-border shadow-sm transition-opacity hover:opacity-90"
            onClick={() => openModal(data)}
          >
            <img
              alt="nature"
              className="object-cover object-center w-full h-64 max-w-full rounded-lg"
              src={data}
            />
          </div>
        ))}
      </div>

      {isOpen && selectedImage && (
        <div
          id="modal-backdrop"
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            opacity: 1,
            backdropFilter: 'blur(5px)',
            transition: 'opacity 0.3s',
            zIndex: 999
          }}
          aria-hidden="true"
        >
          <div
            id="modal-content"
            className="max-md:w[90%]"
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
              position: 'relative',
              margin: '0 auto',
              padding: '16px',
            }}
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            tabIndex={-1}
          >
            <div style={{ marginBottom: '16px' }}>
              <img
              className='max-md:h-[13rem] h-[30rem]'
                alt="nature"
                src={selectedImage}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

