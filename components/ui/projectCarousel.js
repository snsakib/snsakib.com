"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function ProjectCarousel() {
  const projectOne = useRef(null);
  const projectTwo = useRef(null);
  const projectThree = useRef(null);

  const descriptionOne = useRef(null);
  const descriptionTwo = useRef(null);
  const descriptionThree = useRef(null);

  let projects = [];
  let descriptions = [];

  let setCurrentState = (direction) => {
    if (direction === "next") {
      projects.push(projects.shift());
      descriptions.push(descriptions.shift());
    } else if (direction === "previous") {
      projects.unshift(projects.pop());
      descriptions.unshift(descriptions.pop());
    }
    updateGallery();
    updateDescriptions();
  };

  let updateGallery = () => {
    projects.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
    });

    projects.slice(0, 3).forEach((el, i) => {
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

  useEffect(() => {
    projects = [projectOne.current, projectTwo.current, projectThree.current];
    descriptions = [
      descriptionOne.current,
      descriptionTwo.current,
      descriptionThree.current,
    ];
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-container">
        <Image
          src="/assets/img/project-screenshots/robishop-project.png"
          width={500}
          height={500}
          alt="RobiShop project screenshot"
          className="gallery-item gallery-item-1"
          ref={projectOne}
        />
        <Image
          src="/assets/img/project-screenshots/wb-smef-project-new.png"
          width={500}
          height={500}
          alt="World Bank and SME Foundation project screenshot"
          className="gallery-item gallery-item-2"
          ref={projectTwo}
        />
        <Image
          src="/assets/img/project-screenshots/polar-project.png"
          width={500}
          height={500}
          alt="Polar project screenshot"
          className="gallery-item gallery-item-3"
          ref={projectThree}
        />
      </div>
      <div className="gallery-description-container">
        <div
          className="gallery-description gallery-description-1"
          ref={descriptionOne}
        >
          <h3 className="description-title">RobiShop</h3>
          <p className="description-text">
            An e-commerce platform for the{" "}
            <span className="font-bold">Robi Axiata Limited, Bangladesh</span>.
          </p>
          <div className="description-tech">
            <div className="tech-item">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/node-logo.svg"
                width="20px"
                height="20px"
              />
              <span className="tech-item-text text-lime-500">Node</span>
            </div>
            <div className="tech-item">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/mysql-logo.svg"
                width="50px"
                height="20px"
              />
              <span className="tech-item-text text-sky-600">MySQL</span>
            </div>
            <div className="tech-item">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/vue-logo.svg"
                width="20px"
                height="20px"
              />
              <span className="tech-item-text text-emerald-500">Vue</span>
            </div>
          </div>
          <a
            className="description-link"
            href="https://robishop.com.bd/"
            target="_blank"
          >
            View Project
          </a>
        </div>

        <div
          className="gallery-description gallery-description-2"
          ref={descriptionTwo}
        >
          <h3 className="description-title">World Bank & SME Foundation</h3>
          <p className="description-text">
            A joint initiative of the{" "}
            <span className="font-bold">World Bank</span> and{" "}
            <span className="font-bold">SME Foundation Bangladesh</span>. It
            provides female entrepreneurs a marketplace to sell their products
            to the global consumers.
          </p>
          <div className="description-tech">
            <div className="tech-item w-1/2 md:w-auto">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/laravel-logo.svg"
                width="20px"
                height="20px"
              />
              <span className="tech-item-text text-red-600">Laravel</span>
            </div>

            <div className="tech-item w-1/2 md:w-auto">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/node-logo.svg"
                width="20px"
                height="20px"
              />
              <span className="tech-item-text text-lime-500">Node</span>
            </div>

            <div className="tech-item w-1/2 md:w-auto">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/mysql-logo.svg"
                width="50px"
                height="20px"
              />
              <span className="tech-item-text text-sky-600">MySQL</span>
            </div>

            <div className="tech-item w-1/2 md:w-auto">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/vue-logo.svg"
                width="20px"
                height="20px"
              />
              <span className="tech-item-text text-emerald-500">Vue</span>
            </div>
          </div>
          <a
            className="description-link"
            href="http://wsmesuppliersplatform.smef.gov.bd/"
            target="_blank"
          >
            View Project
          </a>
        </div>

        <div
          className="gallery-description gallery-description-3"
          ref={descriptionThree}
        >
          <h3 className="description-title">Polar Ice Cream</h3>
          <p className="description-text">
            An e-commerce platform for the{" "}
            <span className="font-bold">Polar Ice Cream, Bangladesh</span>.
          </p>
          <div className="description-tech">
            <div className="tech-item">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/wordpress-logo.svg"
                width="25px"
                height="20px"
              />
              <span className="tech-item-text text-sky-600">WordPress</span>
            </div>
            <div className="tech-item">
              <img
                className="tech-item-logo"
                src="/assets/img/tech-logos/mysql-logo.svg"
                width="50px"
                height="20px"
              />
              <span className="tech-item-text text-sky-600">MySQL</span>
            </div>
          </div>
          <a
            className="description-link"
            href="https://polarbd.com"
            target="_blank"
          >
            View Project
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
