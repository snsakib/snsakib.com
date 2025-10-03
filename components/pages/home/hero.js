"use client";
import { portico  } from "@/app/fonts-loader";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin) 

export default function HomeHero() {

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, delay: 2, repeatDelay: 2, yoyo: true });

    tl.to("#home-hero-service", {
      duration: 2,
      text: "AI/ML",
      ease: "power2.inOut",
    }).to("#home-hero-service", {
      duration: 2,
      text: "Blockchain",
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="hero-wrapper">
      <div id="home-hero" className="page-section">
        <p className={ portico.className + " text-2xl md:text-3xl xl:text-5xl"}>Hi, I'm</p>
        <img id="home-hero-img" src="/assets/img/home-hero-name.svg" />
        <p className={"text-xl md:text-2xl xl:text-4xl"}>Helping businesses with <span id="home-hero-service" className="text-gradient-1 block md:inline">Web Development</span> solutions</p>
      </div>
    </section>
  );
}
