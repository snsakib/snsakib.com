"use client";
import { incompleeta } from "@/app/fonts-loader";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import horizontalLoop from "@/utils/js/horizontalLoop";

export default function HomeClients() {
  
  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions;

        horizontalLoop(".client-logo", {
          repeat: -1,
          paddingRight: isMobile ? 50 : 100,
          speed: 1,
        });
      }
    );

  }, []);

  return (
    <section id="clients-wrapper">
      <div id="home-clients">
        <div className="w-full">
          <h2
            className={
              incompleeta.className +
              " section-heading text-gradient-1 mb-10 text-center"
            }
          >
            My Clients
          </h2>
        </div>

        <div className="client-logos">
          <div className="scrolling-logos">
            <div className="client-logo client-logo-polar">
              <a
                href="https://polarbd.com/"
                target="_blank"
                title="Polar Ice Cream"
              >
                <Image src="/assets/img/polar-logo.png" alt="Polar logo" fill />
              </a>
            </div>

            <div className="client-logo">
              <a
                href="https://www.robi.com.bd/"
                target="_blank"
                title="Robi Axiata Limited"
              >
                <Image src="/assets/img/robi-logo.svg" alt="Robi logo" fill />
              </a>
            </div>

            <div className="client-logo client-logo-wb">
              <a
                href="https://www.worldbank.org/"
                target="_blank"
                title="The World Bank"
              >
                <Image
                  src="/assets/img/world-bank-logo.svg"
                  alt="World Bank logo"
                  fill
                />
              </a>
            </div>

            <div className="client-logo client-logo-cwl">
              <a
                href="https://col.org"
                target="_blank"
                title="Commonwealth of Learning"
              >
                <Image
                  src="/assets/img/col-logo.png"
                  alt="Commonwealth of Learning logo"
                  fill
                />
              </a>
            </div>

            <div className="client-logo client-logo-gcf">
              <a
                href="https://www.greenclimate.fund/"
                target="_blank"
                title="Green Climate Fund"
              >
                <Image
                  src="/assets/img/gcf-logo.svg"
                  alt="Green Climate Fund logo"
                  fill
                />
              </a>
            </div>

            <div className="client-logo">
              <a
                href="https://educative.io/"
                target="_blank"
                title="educative.io"
              >
                <Image
                  src="/assets/img/educative-logo.svg"
                  alt="educative.io logo"
                  fill
                />
              </a>
            </div>

            <div className="client-logo">
              <a
                href="http://wsmesuppliersplatform.smef.gov.bd/"
                target="_blank"
                title="Small & Medium Enterprise Foundation"
              >
                <Image src="/assets/img/smef-logo.png" alt="SMEF logo" fill />
              </a>
            </div>

            <div className="client-logo client-logo-pksf">
              <a
                href="https://pksf.org.bd/"
                target="_blank"
                title="Palli Karma-Sahayak Foundation"
              >
                <Image
                  src="/assets/img/pksf-logo.svg"
                  alt="Palli Karma-Sahayak Foundation logo"
                  fill
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
