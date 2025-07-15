"use client";
import { incompleeta } from "@/app/fonts-loader";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeCourses() {

  useGSAP(() => {
    gsap.fromTo(
      '.fade-up',
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#home-courses",
          start: "top 50%",
          toggleActions: "play none none reverse"
        }
      }
    )
  })

  return (
    <section
      id="home-courses"
      className="page-sectio py-6 md:py-10"
    >
      <div>
        <h2
          className={
            incompleeta.className +
            " section-heading mb-5 text-gradient-1 text-center fade-up"
          }
        >
          My Courses
        </h2>
      </div>
      <div className="courses-container">
        <div className="course fade-up">
          <img
            src="/assets/img/course-banners/nft-marketplace-dapp.avif"
            alt="course image"
            width="100%"
            height="200px"
            className="course-image"
          />
          <div className="course-info">
            <h2 className="course-title">Build an NFT Marketplace dApp</h2>
            <div className="course-tech">
              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/next-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/solidity-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/hardhat-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <a
              className="course-link"
              href="https://www.educative.io/projects/build-an-nft-marketplace-decentralized-application-dapp"
              target="_blank"
            >
              View Course
            </a>
          </div>
        </div>

        <div className="course fade-up">
          <div>
            <img
              src="/assets/img/course-banners/nft-marketplace-smart-contract.avif"
              alt="course image"
              width="100%"
              height="200px"
              className="course-image"
            />
          </div>
          <div className="course-info">
            <h2 className="course-title">
              Develop Smart Contract for NFT Marketplace
            </h2>
            <div className="course-tech">
              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/solidity-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/hardhat-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/javascript-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <a
              className="course-link"
              href="https://www.educative.io/projects/develop-smart-contract-for-nft-marketplace"
              target="_blank"
            >
              View Course
            </a>
          </div>
        </div>

        <div className="course fade-up">
          <img
            src="/assets/img/course-banners/angular-ngrx.avif"
            alt="course image"
            width="100%"
            height="200px"
            className="course-image"
          />
          <div className="course-info">
            <h2 className="course-title">
              Mastering State Management with Angular & Ngrx
            </h2>
            <div className="course-tech">
              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/angular-logo.png"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/typescript-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/ngrx-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <a
              className="course-link"
              href="https://www.educative.io/courses/mastering-state-management-with-angular-and-ngrx"
              target="_blank"
            >
              View Course
            </a>
          </div>
        </div>
      </div>
      <div className="home-courses-section-divider"></div>
    </section>
  );
}