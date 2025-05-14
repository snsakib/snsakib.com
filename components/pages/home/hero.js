"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function HomeHero() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    
    gsap.fromTo(
      imgRef.current, 
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out"
      }
    );

    gsap.fromTo(
      textRef.current, 
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out"
      }
    )

    gsap.fromTo(
      '.contact-link', 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
        ease: "power1.out"
      }
    )

    const t1 = gsap.timeline({
      repeat: -1,
      delay: 2,
      repeatDelay: 3
    });

    t1.to(textRef.current, {
      duration: 3,
      text: "Blockchain Developer"
    });

    t1.to(textRef.current, {
      duration: 3,
      text: "Full Stack Web Developer",
      delay: 3
    })
  }, []);

  return (
    <section className="hero-wrapper">
      <div id="home-hero" className="page-section">
        <img ref={imgRef} id="home-hero-img" src="/assets/img/home-hero-name.svg" />
        <h2 id="home-hero-title" ref={textRef} className="text-xl md:text-3xl xl:text-4xl">
          Full Stack Web Developer
        </h2>
      </div>
    </section>
  );
}
