import { Helmet } from 'react-helmet';
import { useLocation, useOutletContext } from 'react-router-dom';
import { PrimaryButton, ContentBlock, Tag } from '../components/Elements';
import Header from '../components/Header';

import swellyDark from '../assets/content/swellyDark.png'
import swellyLight from '../assets/content/swellyLight.png'
import classyDark from '../assets/content/classyDark.png'
import classyLight from '../assets/content/classyLight.png'
import siteDark from '../assets/content/siteDark.png'
import siteLight from '../assets/content/siteLight.png'


function Content() {
  const [theme] = useOutletContext(),
    loc = useLocation();
  return (
    <>
      <Helmet>
        <title>Property List</title>
      </Helmet>
      <Header>
        <div>
          <h1>Explore Our Property Listings</h1>
          <p>Find the perfect property that matches your lifestyle and budget. Our wide selection of properties offers something for everyone—from modern apartments and family homes to luxury estates. With detailed descriptions, high-quality images, and up-to-date availability, you're sure to find your next home with us.</p>
        </div>
      </Header>
      <main>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <div className='contentblock-tagrow'>
              <h2>Cozy Apartment</h2>
              <Tag color="green">for rent</Tag>
            </div>
            <p>
            Discover this charming cozy apartment located in the heart of the city. With modern amenities and a spacious layout, it’s perfect for individuals or couples looking for comfort and convenience.
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton  text="visit" ext destination="https://www.airbnb.co.in/s/homes?omni_page_id=36021&map_toggle=true&superhost=true&dynamic_product_ids%5B%5D=1108818497003804529&room_types%5B%5D=Entire+home%2Fapt&category_tag=Tag%3A8661&checkin=2024-12-04&checkout=2024-12-09&date_picker_type=calendar&lat=25.2345&lng=55.28499&place_id=ChIJRcbZaklDXz4RYlEphFBu5r0&search_mode=flex_destinations_search" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              classyDark : classyDark}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <div className='contentblock-tagrow'>
              <h2>Spacious Family Home</h2>
              <Tag color="green">visit</Tag>
            </div>
            <p>
            This beautiful family home features 4 bedrooms, a large backyard, and a welcoming neighborhood. Ideal for families seeking space and a friendly community atmosphere.
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton  text="visit" ext destination="https://www.airbnb.co.in/s/homes?omni_page_id=36021&map_toggle=true&dynamic_product_ids%5B%5D=687378408599302298&room_types%5B%5D=Entire+home%2Fapt&amenities%5B%5D=8&checkin=2024-10-20&checkout=2024-10-25&date_picker_type=calendar&lat=25.186827&lng=55.27792&place_id=ChIJRcbZaklDXz4RYlEphFBu5r0" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              classyDark : classyDark}
            />
          </div>
        </ContentBlock>

        {/* <ContentBlock animate>
          <div className='contentblock-text'>
            <div className='contentblock-tagrow'>
              <h2>WebPage</h2>
              <Tag color="green">site</Tag>
            </div>
            <p>
              An open source single page application made with HTML, CSS and Javascript. It contains animation and social media likns.
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton text="View code" ext destination="https://github.com/ayushedith/simpleWebpage" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ? siteDark : siteLight} />
          </div>
        </ContentBlock> */}

        <div className='supportblock'>
          <h2>LET'S CREATE SOMETHING EXTRAORDINARY!</h2>
          <p>
          Driven by my passion for coding, design, and collaboration, I'm eager to join forces and create something truly remarkable with you. Let's harness our combined expertise to build innovative solutions and bring inspiring ideas to life! Thanks!
          </p>
          <div className='supportblock-actions'>
            <PrimaryButton disabled text="Connect" border ext destination="https://github.com/Pritikumari32123" arrow />
          </div>
        </div>

      </main>
    </>
  );
}

export default Content;