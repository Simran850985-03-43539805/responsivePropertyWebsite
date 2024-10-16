import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { ContentFullsizeBlock, PrimaryButton } from '../components/Elements';
import Header from '../components/Header';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Applications() {
  const loc = useLocation();
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Header>
        <div>
          <h1>Get in Touch with Us</h1>
          <p>Have questions or need assistance? We're here to help! Whether you're interested in a property, need more details, or want to schedule a viewing, feel free to reach out. Our team is ready to assist you in finding the perfect property or addressing any concerns you may have.</p>
        </div>
      </Header>
      <main>

        <AnimationOnScroll offset={0} animateOnce={true} animateIn={'animate__fadeInUp'} duration={.5}>

          <ContentFullsizeBlock>
            {/* <IconModerator className="application-icon mod" /> */}
            <h2 style={{ color: "var(--color-text-application-mod)" }}>Property Solutions</h2>
            <p>
            Find your dream home or investment property with ease! We provide comprehensive real estate services tailored to meet your unique needs, 
            whether you're buying, selling, or renting. From initial consultation to closing the deal, 
            we're here to support you every step of the way.
            </p>
            <h3 style={{ color: "var(--color-text-application-mod)" }}>Our Services Include:</h3>
            <ul>
              <li>A wide range of residential and commercial properties to explore.</li>
              <li>Get personalized property recommendations based on your preferences.</li>
              <li> Experience properties from the comfort of your home with immersive virtual tours.</li>
              <li>Accurate assessments to help you make informed decisions on property values.</li>
              <li>Professional support to navigate the buying, selling, or renting process smoothly.</li>
            </ul>
            <PrimaryButton ext text="Hire me" destination="https://www.linkedin.com/in/prity-kumari-708aa7306" arrow />
          </ContentFullsizeBlock>

          <ContentFullsizeBlock>
            {/* <IconProfessional className="application-icon professional" /> */}
            <h2 style={{ color: "var(--color-text-application-professional)" }}>Property Management Services</h2>
            <p>
            Leave the hassle of property management to us! Our comprehensive property management 
            solutions are designed to maximize your property's 
            potential while minimizing your stress. Whether you own a single 
            rental unit or an entire portfolio, we handle everything from tenant 
            relations to property maintenance.
            </p>
            <h3 style={{ color: "var(--color-text-application-professional)" }}>Our Services Include:</h3>
            <ul>
              <li>Thorough vetting to ensure reliable tenants.</li>
              <li> Hassle-free rent management and timely collection.</li>
              <li>Regular upkeep and prompt response to repair requests.</li>
              <li>Effective advertising strategies to minimize vacancy periods.</li>
              <li>Ensuring your property complies with all local regulations and laws.</li>
            </ul>
            <PrimaryButton ext text="Hire me" destination="https://www.linkedin.com/in/prity-kumari-708aa7306" arrow />
          </ContentFullsizeBlock>

          <ContentFullsizeBlock>
            {/* <IconProfessional className="application-icon professional" /> */}
            <h2 style={{ color: "var(--color-text-application-consultations)" }}>Real Estate Consulting</h2>
            <p>
            Make informed property decisions with expert advice! We offer real estate consulting services to guide you through the complex world of property investment, helping you maximize returns and minimize risks. 
            Whether you're a first-time buyer or an experienced investor, our insights are tailored to your goals.
            </p>
            <h3 style={{ color: "var(--color-text-application-consultations)" }}>Our Services Include:</h3>
            <ul>
              <li>Detailed reports on property trends and investment opportunities.</li>
              <li>Custom-tailored strategies to grow your real estate portfolio.</li>
              <li>Advice on minimizing potential risks and maximizing returns.</li>
              <li>Guidance through the process of building or renovating properties.</li>
              <li>Expert support in securing the best deals and terms.</li>
            </ul>
            <PrimaryButton ext text="Contact" destination="https://www.linkedin.com/in/prity-kumari-708aa7306" arrow />
          </ContentFullsizeBlock>

        </AnimationOnScroll>
      </main>
    </>
  );
}

export default Applications;