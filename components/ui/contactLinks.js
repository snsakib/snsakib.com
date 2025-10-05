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
      {/* Email Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="30%" style={{ stopColor: "hsla(303, 79%, 76%, 1)", stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: "hsla(360, 86%, 67%, 1)", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
        <path
          fill="url(#gradientFill)"
          fillRule="evenodd"
          d="M3 3h94v94H3V3zM0 0h100v100H0V0zm80 43h-1L61 56l-1 1-5 3-5 2-5-2-5-3-1-1a1551 1551 0 0 1-19-13v24l2 4 4 2h48l4-2 2-4V43zM54 57l-4 1-4-1-3-3-2-1-19-14-1-1-1-2v-2l2-4 4-2h48l4 2 2 4v2l-1 2-1 1-19 14-2 1-3 3z"
          clipRule="evenodd"
        />
      </svg>
    </a>
    {/* LinkedIn Link */}
    <a
      href="https://www.linkedin.com/in/s-n-sakib"
      target="_blank"
      rel="noopener"
      className="contact-link"
      title="s-n-sakib"
    >
      {/* LinkedIn Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          fill="url(#gradientFill)"
          fillRule="evenodd"
          d="M3 3h94v94H3V3zM0 0h100v100H0V0zm24 73h11V37H24v36zm1-42l5 2 4-2c2-1 2-3 2-5 0-1 0-3-2-4l-4-2-5 2-1 4 1 5zm40 42h11V53l-2-12c-2-3-6-4-11-4l-7 1-3 4v-5H42v36h11V55l1-6c1-2 3-3 5-3 3 0 5 1 5 3l1 6v18z"
          clipRule="evenodd"
        />
      </svg>
    </a>
    {/* Twitter Link */}
    <a
      href="https://www.twitter.com/syed_n_sakib"
      target="_blank"
      rel="noopener"
      className="contact-link"
      title="@syed_n_sakib"
    >
      {/* Twitter Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          fill="url(#gradientFill)"
          fillRule="evenodd"
          d="M3 3h94v94H3V3zM0 0h100v100H0V0zm74 40v-2l6-6-7 2c3-2 4-4 5-7l-7 3-5-3-5-1a12 12 0 0 0-10 6l-2 6 1 3a34 34 0 0 1-26-13 12 12 0 0 0 0 12l4 5-6-2c0 3 1 6 3 8l7 5a16 16 0 0 1-5 0l4 6 7 2a24 24 0 0 1-18 5c6 4 12 6 19 6a34 34 0 0 0 31-19c3-5 4-11 4-16z"
          clipRule="evenodd"
        />
      </svg>
    </a>
    {/* GitHub link */}
    <a
      href="https://github.com/snsakib"
      target="_blank"
      rel="noopener"
      className="contact-link"
      title="@snsakib"
    >
      {/* GitHub Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          fill="url(#gradientFill)"
          fillRule="evenodd"
          d="M3 3h94v94H3V3zM0 0h100v100H0V0zm39 68v-1h-1l1 1zm-3-1l1-1v1h-1zm4 0l1-1 1 1h-1-1zm-6-42a30 30 0 0 1 40 10c3 5 4 10 4 15a29 29 0 0 1-20 28h-1l-1-1V67c0-3 0-5-2-6l7-1 5-3 2-9-1-3-2-3v-3-5h-4l-3 2-1 1a27 27 0 0 0-15 0l-2-1-3-2h-3l-1 5v2l-2 4v3c0 4 0 7 2 9l4 3 7 1-2 4-4 1c-2 0-4-1-5-3l-2-2-1-1h-2v1l1 1 1 1 1 2 1 1 2 3 4 1h3l1-1v8l-1 1h-1c-6-2-11-5-14-11-4-5-6-10-6-17 0-5 1-10 4-14 2-5 6-8 10-11zm-3 37h1v1l-1-1zm0-1h-1 1zm3 4h1v1h-1v-1zm-1-1v-1 1z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </div>
  )
}