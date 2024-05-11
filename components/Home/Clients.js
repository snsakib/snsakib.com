import Image from "next/image";

export default function HomeClients() {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row px-6 py-5 md:px-28 md:py-10 bg-white">
      <div className="w-full md:w-1/2 md:pt-10 self-start text-black">
        <h2 className="text-3xl md:text-5xl md:leading-tight mb-3 md:mb-7 font-bold text-gradient text-center md:text-left">
          My Top Clients
        </h2>
        <p className="text-md md:text-2xl mb-10 md:pr-40 text-justify">
          Throughout my professional journey, I have worked with some of the
          most reputable organizations across different industries.
          <br />
          <br />
          These collaborations have allowed me to encounter and overcome unique
          challenges. These opportunities helped me to learn, grow, and develop
          my skills.
        </p>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-3 justify-items-center items-center gap-5">
        <a
          href="https://www.worldbank.org/"
          target="_blank"
          title="The World Bank"
        >
          <Image
            src="/assets/img/world-bank-logo.png"
            width={200}
            height={200}
            alt="World Bank logo"
          />
        </a>

        <a
          href="https://www.robi.com.bd/"
          target="_blank"
          title="Robi Axiata Limited"
        >
          <Image
            src="/assets/img/robi-logo.svg"
            width={150}
            height={150}
            alt="Robi logo"
          />
        </a>

        <a href="https://polarbd.com/" target="_blank" title="Polar Ice Cream">
          <Image
            src="/assets/img/polar-logo.jpeg"
            width={180}
            height={180}
            alt="Polar logo"
          />
        </a>

        <a href="https://educative.io" target="_blank" title="Educative.io">
          <Image
            src="/assets/img/educative-logo.png"
            width={200}
            height={200}
            alt="Eduvative.io logo"
          />
        </a>

        <a
          href="https://www.police.gov.bd/"
          target="_blank"
          title="Bangladesh Police"
        >
          <Image
            src="/assets/img/bd-police-logo.png"
            width={170}
            height={170}
            alt="BD Police logo"
          />
        </a>

        <a
          href="http://wsmesuppliersplatform.smef.gov.bd/"
          target="_blank"
          title="Small & Medium Enterprise Foundation"
        >
          <Image
            src="/assets/img/smef-logo.jpg"
            width={150}
            height={150}
            alt="SMEF logo"
          />
        </a>
      </div>
    </div>
  );
}
