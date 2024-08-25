"use client";

import Image from "next/image";
import { FC, Fragment, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import { Image as ImageType } from "@/models/room";

export const HotelPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handlePrevious = () => {
    setCurrentPhotoIndex(prevIndex =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex(prevIndex =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const maximumVisiblePhotos = 4;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximumVisiblePhotos;

  return (
    <section className="container mx-auto">
      <article className="relative grid gap-5 px-3 md:grid-cols-2">
        <aside className="relative h-[540px] overflow-hidden rounded-2xl">
          <figure className="hidden h-full w-full items-center justify-center md:flex">
            <Image
              src={photos[0].url}
              alt={`Room Photo ${currentPhotoIndex + 1}`}
              className="img scale-animation cursor-pointer"
              width={150}
              height={150}
              onClick={openModal.bind(this, 0)}
            />
          </figure>
          <figure className="flex h-full w-full items-center justify-center md:hidden">
            <Image
              src={photos[currentPhotoIndex].url}
              alt={`Room Photo ${currentPhotoIndex + 1}`}
              className="img"
              width={150}
              height={150}
              onClick={openModal.bind(this, 0)}
            />
          </figure>
        </aside>

        <aside className="flex items-center justify-between md:hidden">
          <figcaption className="flex space-x-2">
            <FaArrowLeft className="cursor-pointer" onClick={handlePrevious} />
            <FaArrowRight className="cursor-pointer" onClick={handleNext} />
          </figcaption>
          <span>
            {currentPhotoIndex + 1} / {photos.length}
          </span>
        </aside>

        <aside className="hidden h-full grid-cols-2 gap-5 md:grid">
          {displayPhotos.map((photo, index) => (
            <figure
              key={index}
              className="h-64 cursor-pointer overflow-hidden rounded-2xl"
            >
              <Image
                width={150}
                height={150}
                src={photo.url}
                alt={`Room photo ${index + 2}`}
                className="img scale-animation"
              />
            </figure>
          ))}
          {remainingPhotosCount > 0 && (
            <figure
              className="relative h-64 cursor-pointer overflow-hidden rounded-2xl"
              onClick={openModal.bind(this, maximumVisiblePhotos)}
            >
              <Image
                width={150}
                height={150}
                src={photos[maximumVisiblePhotos - 1].url}
                alt={`Room Photo ${maximumVisiblePhotos}`}
                className="img"
              />
              <figcaption className="absolute inset-0 flex cursor-pointer items-center justify-center bg-[rgba(0,0,0,0.5)] text-2xl text-white">
                + {remainingPhotosCount}
              </figcaption>
            </figure>
          )}
        </aside>

        {showModal && (
          <article className="fixed left-0 top-0 z-[55] flex h-full w-full items-center justify-center bg-black bg-opacity-90">
            <figure className="relative h-[75vh] w-[320px] md:w-[700px]">
              <Image
                src={photos[currentPhotoIndex].url}
                alt={`Room Photo ${currentPhotoIndex + 1}`}
                width={150}
                height={150}
                className="img"
              />
              <aside className="flex items-center justify-between py-3">
                <figcaption className="flex items-center space-x-2 text-white">
                  <FaArrowLeft
                    className="cursor-pointer"
                    onClick={handlePrevious}
                  />
                  <FaArrowRight
                    className="cursor-pointer"
                    onClick={handleNext}
                  />
                </figcaption>
                <span className="text-sm text-white">
                  {currentPhotoIndex + 1} / {photos.length}
                </span>
              </aside>
              <button
                className="absolute right-2 top-2 text-lg text-white"
                onClick={closeModal}
              >
                <MdCancel className="text-2xl font-medium text-tertiary-dark" />
              </button>
            </figure>
          </article>
        )}
      </article>
    </section>
  );
};
