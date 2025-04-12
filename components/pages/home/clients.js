"use client";
import { incompleeta } from "@/app/fonts-loader";
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeClients() {

  useGSAP(() => {
    gsap.fromTo(
      '.fade-right', 
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#home-clients",
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(
      '.client-logos a', 
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#home-clients",
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })

  return (
    <section id="clients-wrapper">
      <div id="home-clients" className="page-section">
        <div className="w-full lg:w-1/2 md:pt-10 self-start text-black">
          <h2
            className={
              incompleeta.className +
              " section-heading fade-right text-gradient-1 mb-3 md:mb-7 text-center lg:text-left"
            }
          >
            My Clients
          </h2>
          <p className="md:text-2xl mb-10 lg:pr-20 xl:pr-24 2xl:pr-32 text-justify">
            <span className="fade-right inline-block">Throughout my professional journey, I have worked with some of the
            most reputable organizations across different industries.</span>
            <br />
            <br />
            <span className="fade-right inline-block">These collaborations have allowed me to encounter and overcome
            unique challenges. These opportunities helped me to learn, grow, and
            develop my skills.</span>
          </p>
        </div>
        <div className="client-logos">
          <a
            href="https://www.worldbank.org/"
            target="_blank"
            title="The World Bank"
            className="col-span-2"
          >
            <Image
              src="/assets/img/world-bank-logo.svg"
              alt="World Bank logo"
              fill
            />
          </a>

          <a
            href="https://col.org"
            target="_blank"
            title="Commonwealth of Learning"
            className="col-span-2"
          >
            <Image
              src="/assets/img/col-logo.png"
              alt="Commonwealth of Learning logo"
              fill
            />
          </a>

          <a
            href="https://www.robi.com.bd/"
            target="_blank"
            title="Robi Axiata Limited"
          >
            <Image src="/assets/img/robi-logo.svg" alt="Robi logo" fill />
          </a>

          <a
            href="https://polarbd.com/"
            target="_blank"
            title="Polar Ice Cream"
          >
            <Image src="/assets/img/polar-logo.png" alt="Polar logo" fill />
          </a>

          <a
            href="https://educative.io/"
            target="_blank"
            title="educative.io"
          >
            <Image src="/assets/img/educative-logo.svg" alt="educative.io logo" fill />
          </a>

          <a
            href="http://wsmesuppliersplatform.smef.gov.bd/"
            target="_blank"
            title="Small & Medium Enterprise Foundation"
          >
            <Image src="/assets/img/smef-logo.png" alt="SMEF logo" fill />
          </a>

        </div>
      </div>
    </section>
  );
}
