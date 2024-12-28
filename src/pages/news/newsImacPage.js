import React from 'react';
import { Container } from 'react-bootstrap';
import BannerNewsSection from '../../components/news/bannerNewsSection';
import FeatureWithImage from '../../components/news/featuredImage';
import CardsGrid from '../../components/news/cards/cardsgird';
import { ImAppleinc } from 'react-icons/im';
import ImacTextSection from '../../components/news/iMactextSection';
import DisplaySection from '../../components/news/displaySection';
import MacOSSection from '../../components/news/macOsSection';

const NewsImacPage = () => {

  return (
    <Container>
         <ImacTextSection
        title="iMac"
        subtitle="All in one"
        description="iMac takes a leap in performance and AI capability with the M4 chip. A faster CPU makes everything you do even snappier."
      />
      <BannerNewsSection
        imageSrc="https://thegadgetflow.com/wp-content/uploads/2020/03/Satechi-Type-C-Aluminum-iMac-Monitor-Stand-Hub-01.jpg"
      />
     
     <DisplaySection
        title="IMac Production."
        subtitle="A real pupil-pleaser."
        description="With an expansive 24-inch Retina display, iMac offers a brilliant canvas for multitasking, immersive movies and games, and more. The 4.5K resolution and 500 nits of brightness deliver crisp, clear details — that’s five times the resolution and nearly 70 percent brighter compared with the best-selling 24-inch all-in-one PC. And P3 wide color brings whatever’s onscreen to life with over a billion colors."
      />
       <FeatureWithImage
        imageSrc="https://i.pinimg.com/736x/ed/13/fd/ed13fd622c0cff8d2f670efbf773f514.jpg"
        icon={<ImAppleinc />}
        title="Great powers come with great privacy."
        description="Apple Intelligence is designed to protect your privacy at every step. It’s integrated into the core of your Mac through on-device processing. So it’s aware of your personal information without collecting your personal information."
      />
       {/* {features.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
        />
      ))} */}
     
      <MacOSSection/>
      <BannerNewsSection
        imageSrc="https://i.ytimg.com/vi/SGrxGQUPqxk/maxresdefault.jpg"
      />
     
      
      <CardsGrid CategoryName="Apple Imac"/>

    </Container>

  );
};

export default NewsImacPage;
