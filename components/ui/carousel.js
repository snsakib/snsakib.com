"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function Carousel() {
  const galleryItemOne = useRef(null);
  const galleryItemTwo = useRef(null);
  const galleryItemThree = useRef(null);

  let carouselArray = [];

  let setCurrentState = (direction) => {
    if (direction === "next") {
      carouselArray.push(carouselArray.shift());
    } else if (direction === "previous") {
      carouselArray.unshift(carouselArray.pop());
    }
    updateGallery();
  };

  let updateGallery = () => {
    carouselArray.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
    });

    carouselArray.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  };

  useEffect(() => {
    carouselArray = [
      galleryItemOne.current,
      galleryItemTwo.current,
      galleryItemThree.current,
    ];
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-container">
        <Image
          src="/assets/img/robi-logo.svg"
          width={300}
          height={300}
          alt="Robi logo"
          className="gallery-item gallery-item-1"
          ref={galleryItemOne}
        />
        <Image
          src="/assets/img/world-bank-logo.png"
          width={300}
          height={300}
          alt="World Bank logo"
          className="gallery-item gallery-item-2"
          ref={galleryItemTwo}
        />
        <Image
          src="/assets/img/polar-logo.jpeg"
          width={300}
          height={300}
          alt="Polar logo"
          className="gallery-item gallery-item-3"
          ref={galleryItemThree}
        />
      </div>
      <div className="gallery-controls">
        <button
          className="gallery-controls-previous"
          onClick={() => setCurrentState("previous")}
        >
          <GoArrowLeft />
        </button>
        <button
          className="gallery-controls-next"
          onClick={() => setCurrentState("next")}
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
}
