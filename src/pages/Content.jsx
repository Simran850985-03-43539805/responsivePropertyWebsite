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
              <h2>Swelly</h2>
              <Tag color="red">Discord bot</Tag>
            </div>
            <p>
               Meet Swelly, your favorite Discord music bot! Swelly is not just a bot, Designed with a passion for music, Swelly brings a rich and immersive music experience directly to your chat.
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton disabled text="Invite Swelly" ext destination="https://discord.com/api/oauth2/authorize?client_id=917761628924149771&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fswelly&scope=bot" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              swellyDark : swellyLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <div className='contentblock-tagrow'>
              <h2>Classy</h2>
              <Tag color="green">Discord server</Tag>
            </div>
            <p>
              Engineered 'Classy' Discord server, harmonizing sophistication and utility. Organized channels, refined aesthetics, and tailored bot integrations foster dynamic community engagement, showcasing adeptness in crafting inviting digital spaces.
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton disabled text="Join server" ext destination="https://www.discord.gg/classyop" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              classyDark : classyLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate>
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
        </ContentBlock>

        <div className='supportblock'>
          <h2>LET'S CREATE SOMETHING EXTRAORDINARY!</h2>
          <p>
          Driven by my passion for coding, design, and collaboration, I'm eager to join forces and create something truly remarkable with you. Let's harness our combined expertise to build innovative solutions and bring inspiring ideas to life! Thanks!
          </p>
          <div className='supportblock-actions'>
            <PrimaryButton disabled text="Donate" border ext destination="https://github.com/Pritikumari32123" arrow />
          </div>
        </div>

      </main>
    </>
  );
}

export default Content;