import { incompleeta } from "@/app/fonts-loader";

export default function HomeCourses() {
  return (
    <section
      id="home-courses"
      className="page-section text-stone-50 pt-28 md:pt-20 pb-20"
    >
      <div>
        <h2
          className={
            incompleeta.className +
            " section-heading mb-5 text-gradient-1 text-center"
          }
        >
          My Courses
        </h2>
      </div>
      <div className="courses-container">
        <div className="course">
          <img
            src="/assets/img/course-banners/nft-marketplace-dapp.avif"
            alt="course image"
            width="100%"
            height="200px"
            className="course-image"
          />
          <div className="course-info">
            <h2 className="course-title">Build an NFT Marketplace dApp</h2>
            <div className="course-tech">
              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/next-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/solidity-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/hardhat-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <a
              className="course-link"
              href="https://www.educative.io/projects/build-an-nft-marketplace-decentralized-application-dapp"
              target="_blank"
            >
              View Course
            </a>
          </div>
        </div>

        <div className="course">
          <div>
            <img
              src="/assets/img/course-banners/nft-marketplace-smart-contract.avif"
              alt="course image"
              width="100%"
              height="200px"
              className="course-image"
            />
          </div>
          <div className="course-info">
            <h2 className="course-title">
              Develop Smart Contract for NFT Marketplace
            </h2>
            <div className="course-tech">
              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/solidity-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/hardhat-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/javascript-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <a
              className="course-link"
              href="https://www.educative.io/projects/develop-smart-contract-for-nft-marketplace"
              target="_blank"
            >
              View Course
            </a>
          </div>
        </div>

        <div className="course">
          <img
            src="/assets/img/course-banners/angular-ngrx.avif"
            alt="course image"
            width="100%"
            height="200px"
            className="course-image"
          />
          <div className="course-info">
            <h2 className="course-title">
              Mastering State Management with Angular & Ngrx
            </h2>
            <div className="course-tech">
              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/angular-logo.png"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/typescript-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="course-tech-item">
                <img
                  className="course-tech-item-logo"
                  src="/assets/img/tech-logos/ngrx-logo.svg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <a
              className="course-link"
              href="https://www.educative.io/courses/mastering-state-management-with-angular-and-ngrx"
              target="_blank"
            >
              View Course
            </a>
          </div>
        </div>
      </div>
      <div className="home-courses-section-divider"></div>
    </section>
  );
}
