import Image from "next/image";

export default function HomeClients() {
  return (
    <section id="home-clients" className="bg-white">
      <div className="flex justify-between items-center flex-col lg:flex-row page-section pt-28 pb-20 md:pt-32">
        <div className="w-full lg:w-1/2 md:pt-10 self-start text-black">
          <h2 className="section-heading mb-3 md:mb-7 text-gradient-1 text-center lg:text-left">
            My Top Clients
          </h2>
          <p className="text-md md:text-2xl mb-10 lg:pr-20 xl:pr-24 2xl:pr-32 text-justify">
            Throughout my professional journey, I have worked with some of the
            most reputable organizations across different industries.
            <br />
            <br />
            These collaborations have allowed me to encounter and overcome
            unique challenges. These opportunities helped me to learn, grow, and
            develop my skills.
          </p>
        </div>
        <div className="client-logos w-full lg:w-1/2 grid grid-cols-12 justify-items-center items-center gap-y-6">
          <a
            href="https://www.worldbank.org/"
            target="_blank"
            title="The World Bank"
            className="col-start-2 col-span-10"
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
            className="row-start-2 col-start-2 col-span-10"
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
            className="row-start-3 col-start-2 col-span-4"
          >
            <Image src="/assets/img/robi-logo.svg" alt="Robi logo" fill />
          </a>

          <a
            href="https://polarbd.com/"
            target="_blank"
            title="Polar Ice Cream"
            className="row-start-3 col-start-7 col-span-5"
          >
            <Image src="/assets/img/polar-logo.png" alt="Polar logo" fill />
          </a>

          <a
            href="http://wsmesuppliersplatform.smef.gov.bd/"
            target="_blank"
            title="Small & Medium Enterprise Foundation"
            className="row-start-4 col-start-2 col-span-4"
          >
            <Image src="/assets/img/smef-logo.jpg" alt="SMEF logo" fill />
          </a>

          <a
            href="https://www.police.gov.bd/"
            target="_blank"
            title="Bangladesh Police"
            className="row-start-4 col-start-7 col-span-5"
          >
            <Image
              src="/assets/img/bd-police-logo.svg"
              alt="BD Police logo"
              fill
            />
          </a>
        </div>
      </div>
      <div className="home-clients-section-divider"></div>
    </section>
  );
}
