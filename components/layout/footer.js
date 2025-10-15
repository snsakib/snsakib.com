import ContactLinks from "@/components/ui/contactLinks";

export default function Footer() {
  return (
    <footer className="page-section">
      <div id="home-footer-logo-wrapper">
        <img id="home-footer-logo" src="/assets/img/home-hero-logo.png" />
      </div>

      <div>
        <p className="home-footer-tagline">
          Coding &#10132; Breaking &#10132; Fixing &#10132; Evolving
        </p>
      </div>

      <div>
        <ContactLinks/>
      </div>
    </footer>
  )
}