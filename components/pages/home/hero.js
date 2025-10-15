"use client";
import { portico  } from "@/app/fonts-loader";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import ContactLinks from "@/components/ui/contactLinks";

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
      <div id="home-hero-logo">
        <img id="home-hero-logo-img" src="/assets/img/home-hero-logo.png"/>
      </div>
      <div id="home-hero" className="page-section">
        <p className={ portico.className + " text-2xl md:text-3xl"}>Hi, I'm</p>
        <img id="home-hero-name" src="/assets/img/home-hero-name.svg" />
        <p id="home-hero-title">Helping businesses with <span id="home-hero-service" className="text-gradient-1 block">Web Development</span> solutions</p>
        <div id="home-hero-contacts-wrapper">
          <ContactLinks/>
        </div>
      </div>
    </section>
  );
}
