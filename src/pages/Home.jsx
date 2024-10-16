import { Helmet } from "react-helmet";
import { useOutletContext } from "react-router-dom";
import { PrimaryButton, ContentBlock } from "../components/Elements";
import Header from "../components/Header";

import edithDark from "../assets/illustrations/pritiProfilePicSVG.svg";
import edithlight from "../assets/illustrations/pritiProfilePicSVGLight.svg";
import programDark from "../assets/illustrations/programDark.svg";
import programLight from "../assets/illustrations/programLight.svg";
import designDark from "../assets/illustrations/builds.svg";
import designLight from "../assets/illustrations/builds.svg";
import hobDark from "../assets/illustrations/hobLight.svg";
import hobLight from "../assets/illustrations/hobLight.svg";
import eduDark from "../assets/illustrations/eduDark.svg";
import eduLight from "../assets/illustrations/eduLight.svg";

function Home() {
  const [theme] = useOutletContext();
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header>
        <div>
          <h1>Welcome!</h1>
          <p>
            Discover your dream property with ease. Whether you're looking for a
            cozy apartment, a spacious family home, or a luxury estate, we offer
            a curated selection of properties to suit your needs.
          </p>
        </div>
      </Header>
      <main>
        <ContentBlock animate>
          <div className="contentblock-text">
            <h2>Priti Kumari</h2>
            <p>
              Hi! I'm Priti, a Computer Science student and the creator of this
              property website. I’m passionate about combining technology and
              real estate to help people find their dream homes. My goal is to
              make the property search process simple and enjoyable for
              everyone. Join me as we explore the world of properties together!
            </p>
            {/* 
            <div className='contentblock-actions'>
              <PrimaryButton text="Visit Content" destination="content" arrow />
            </div>
             */}
          </div>
          <div className="contentblock-image">
            <img
              className="no-touch"
              draggable={false}
              alt=""
              src={theme === "dark" ? edithDark : edithlight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate r>
          <div className="contentblock-text">
            <h2>Explore Our Listings</h2>
            <p>
              Browse our extensive property listings, featuring everything from
              modern apartments to charming family homes and luxurious estates.
              Each listing includes high-quality images, detailed descriptions,
              and essential information to help you make informed decisions. Use
              our advanced search filters to easily find properties that match
              your preferences.
            </p>
          </div>
          <div className="contentblock-image">
            <img
              className="no-touch"
              draggable={false}
              alt=""
              src={theme === "dark" ? programDark : programLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate>
          <div className="contentblock-text">
            <h2>Personalized Service</h2>
            <p>
              Our dedicated team of real estate professionals is committed to
              providing personalized service tailored to your unique needs. We
              take the time to understand your goals and guide you from initial
              consultations to closing the deal, ensuring a smooth and
              stress-free experience.
            </p>
          </div>
          <div className="contentblock-image">
            <img
              className="no-touch"
              draggable={false}
              alt=""
              src={theme === "dark" ? designDark : designLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate r>
          <div className="contentblock-text">
            <h2>Start Your Journey Today</h2>
            <p>
              Don’t wait to find your dream property! Explore our listings and
              get in touch with our team to schedule viewings or ask questions.
              At [Your Website Name], your perfect home is just a click away.
              Let us help you take the next step in your property journey!{" "}
            </p>
          </div>
          <div className="contentblock-image">
            <img
              className="no-touch"
              draggable={false}
              alt=""
              src={theme === "dark" ? hobDark : hobLight}
            />
          </div>
        </ContentBlock>
{/* 
        <ContentBlock animate l>
          <div className="contentblock-text">
            <h2>Education</h2>
            <p>
              I hold a diploma and a Bachelor's degree in Technology from NSIT.
              Additionally, I've pursued various courses from NIELIT, including
              web development using PHP and data science with Python. I've also
              completed an advanced web design course from DEV TOWN.
            </p>
          </div>
          <div className="contentblock-image">
            <img
              className="no-touch"
              draggable={false}
              alt=""
              src={theme === "dark" ? eduDark : eduLight}
            />
          </div>
        </ContentBlock> */}

        <div className="supportblock">
          <h2>Let's create something extraordinary!</h2>
          <p>
            Driven by my passion for coding, design, and collaboration, I'm
            eager to join forces and create something truly remarkable with you.
            Let's harness our combined expertise to build innovative solutions
            and bring inspiring ideas to life! Thanks!
          </p>
          <div className="supportblock-actions">
            <PrimaryButton
              disabled
              text="Connect"
              border
              ext
              destination="https://github.com/Pritikumari32123"
              arrow
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
