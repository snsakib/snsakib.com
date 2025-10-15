import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactLinks() {
  return (
    <div
    id="contact-links"
    className="w-full"
  >
    {/* Email Link */}
    <a
      href="mailto:hello@snsakib.com"
      rel="noopener"
      className="contact-link"
      title="hello@snsakib.com"
    >
      <FaEnvelope />
    </a>
    {/* LinkedIn Link */}
    <a
      href="https://www.linkedin.com/in/s-n-sakib"
      target="_blank"
      rel="noopener"
      className="contact-link"
      title="s-n-sakib"
    >
      <FaLinkedin />
    </a>
    {/* Twitter Link */}
    <a
      href="https://www.twitter.com/syed_n_sakib"
      target="_blank"
      rel="noopener"
      className="contact-link"
      title="@syed_n_sakib"
    >
      <FaXTwitter />
    </a>
    {/* GitHub link */}
    <a
      href="https://github.com/snsakib"
      target="_blank"
      rel="noopener"
      className="contact-link"
      title="@snsakib"
    >
      <FaGithub/>
    </a>
  </div>
  )
}