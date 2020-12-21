import '../../App.css';
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


export default function Anh() {
  const photos = [
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    },
    {
      src: "images/img-1.jpg",
      width: 2048,
      height: 2042
    }
    /*{
        src: "images/img-1.jpg",
        width: 2048,
        height: 2042
    },
    {
        src: "images/img-2.jpg",
        width: 1536,
        height: 2048
    },
    {
        src: "images/img-3.jpg",
        width: 3,
        height: 4
    },
    {
        src: "images/img-4.jpg",
        width: 3,
        height: 4
    },
    {
        src: "images/img-5.jpg",
        width: 3,
        height: 4
    },
    {
        src: "images/img-6.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-7.jpg",
        width: 3,
        height: 4
    },
    {
        src: "images/img-8.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-9.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-10.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-11.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-12.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-13.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-14.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-15.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-16.jpg",
        width: 4,
        height: 3
    },
    {
        src: "images/img-17.jpg",
        width: 4,
        height: 3
    },*/
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="anh">
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
