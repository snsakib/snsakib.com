"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function CourseCarousel() {
  const courseOne = useRef(null);
  const courseTwo = useRef(null);
  const courseThree = useRef(null);

  const descriptionOne = useRef(null);
  const descriptionTwo = useRef(null);
  const descriptionThree = useRef(null);

  const galleryRef = useRef(null);
  let courses = [];
  let descriptions = [];

  let setCurrentState = (direction) => {
    if (direction === "next") {
      courses.push(courses.shift());
      descriptions.push(descriptions.shift());
    } else if (direction === "previous") {
      courses.unshift(courses.pop());
      descriptions.unshift(descriptions.pop());
    }
    updateGallery();
    updateDescriptions();
  };

  let updateGallery = () => {
    courses.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
    });

    courses.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  };

  let updateDescriptions = () => {
    descriptions.forEach((el) => {
      el.classList.remove("gallery-description-1");
      el.classList.remove("gallery-description-2");
      el.classList.remove("gallery-description-3");
    });

    descriptions.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-description-${i + 1}`);
    });
  };

  // Touch support
  useEffect(() => {
    const galleryContainer = galleryRef.current;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchEndX - touchStartX;
      const minSwipeDistance = 50;

      if (swipeDistance > minSwipeDistance) {
        setCurrentState("previous");
      } else if (swipeDistance < -minSwipeDistance) {
        setCurrentState("next");
      }
    };

    if (galleryContainer) {
      galleryContainer.addEventListener("touchstart", handleTouchStart);
      galleryContainer.addEventListener("touchmove", handleTouchMove);
      galleryContainer.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (galleryContainer) {
        galleryContainer.removeEventListener("touchstart", handleTouchStart);
        galleryContainer.removeEventListener("touchmove", handleTouchMove);
        galleryContainer.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  useEffect(() => {
    courses = [courseOne.current, courseTwo.current, courseThree.current];
    descriptions = [
      descriptionOne.current,
      descriptionTwo.current,
      descriptionThree.current,
    ];
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="gallery-container">
        <Image
          src="/assets/img/course-banners/angular-ngrx.avif"
          width={500}
          height={500}
          alt="Angular NGRX course screenshot"
          className="gallery-item gallery-item-1"
          ref={courseOne}
        />
        <Image
          src="/assets/img/course-banners/nft-marketplace-dapp.avif"
          width={500}
          height={500}
          alt="NFT Marketplace Dapp course screenshot"
          className="gallery-item gallery-item-2"
          ref={courseTwo}
        />
        <Image
          src="/assets/img/course-banners/nft-marketplace-smart-contract.avif"
          width={500}
          height={500}
          alt="NFT Marketplace Smart Contract course screenshot"
          className="gallery-item gallery-item-3"
          ref={courseThree}
        />
      </div>
      <div className="gallery-description-container">
        <div
          className="gallery-description gallery-description-1"
          ref={descriptionOne}
        >
          <h3 className="description-title">
            Mastering State Management with Angular & NgRx
          </h3>
          <div className="description-tech">
            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/angular-logo.png"
                width={100}
                height={100}
              />
            </div>
            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/typescript-logo.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/ngrx-logo.svg"
                width={100}
                height={100}
              />
            </div>
          </div>
          <a
            className="description-link"
            href="https://www.educative.io/courses/mastering-state-management-with-angular-and-ngrx"
            target="_blank"
          >
            View Course
          </a>
        </div>        
        
        <div
          className="gallery-description gallery-description-2"
          ref={descriptionTwo}
        >
          <h3 className="description-title">Build an NFT Marketplace dApp</h3>
          <div className="description-tech">
            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/next-logo.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/solidity-logo.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/hardhat-logo.svg"
                width={100}
                height={100}
              />
            </div>
          </div>
          <a
            className="description-link"
            href="https://www.educative.io/projects/build-an-nft-marketplace-decentralized-application-dapp"
            target="_blank"
          >
            View Course
          </a>
        </div>

        <div
          className="gallery-description gallery-description-3"
          ref={descriptionThree}
        >
          <h3 className="description-title">
            Develop Smart Contract for NFT Marketplace
          </h3>
          <div className="description-tech">
            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/solidity-logo.svg"
                width={100}
                height={100}
              />
            </div>

            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/hardhat-logo.svg"
                width={100}
                height={100}
              />
            </div>

            <div className="tech-item">
              <Image
                className="tech-item-logo"
                src="/assets/img/tech-logos/javascript-logo.svg"
                width={100}
                height={100}
              />
            </div>
          </div>
          <a
            className="description-link"
            href="https://www.educative.io/projects/develop-smart-contract-for-nft-marketplace"
            target="_blank"
          >
            View Course
          </a>
        </div>
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
