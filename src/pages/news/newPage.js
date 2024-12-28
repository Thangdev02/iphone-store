import React from 'react';
import FeatureSection from '../../components/news/featuresSection';
import { Container } from 'react-bootstrap';
import BannerNewsSection from '../../components/news/bannerNewsSection';
import { FaHeadphonesAlt } from 'react-icons/fa';
import FeatureWithImage from '../../components/news/featuredImage';
import CardsGrid from '../../components/news/cards/cardsgird';

const NewsPage = () => {
  const features = [
    { title: 'Apple AirPods Max', description: 'BREATHTAKING AUDIO QUALITY — Apple-designed dynamic driver provides high-fidelity audio. Computational audio combines custom acoustic design with the Apple H1', image: 'https://i.pinimg.com/736x/e9/8a/2d/e98a2de04c8e877fd80255ca90ed9f17.jpg' },
    { title: 'Apple AirPods Max Wireless Over-Ear Headphones.', description: 'HEAR THE WORLD AROUND YOU — Transparency mode lets you hear and interact with the world around you.', image: 'https://i.pinimg.com/736x/cf/71/87/cf718744a930691fb41d238f77675978.jpg' },
  ];

  

  return (
    <Container>
      <BannerNewsSection
        imageSrc="https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_listening-experience_12082020_big_carousel.jpg.large.jpg"
        title="Over-ear design"
        description="From canopy to cushion, built for unequaled fit and comfort."
      />
      {features.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
        />
      ))}
       <FeatureWithImage
        imageSrc="https://i.pinimg.com/736x/e2/51/1d/e2511da7313ff642c479c5928f2d69b3.jpg"
        icon={<FaHeadphonesAlt />}
        title="Pro-level Active Noise Cancellation"
        description="With up to 2x more noise canceled, pro-level Active Noise Cancellation counters external sound with equal anti-noise. With control over what you hear — and don’t hear — you can immerse yourself in music and podcasts, or simply stay focused, like never before. and don’t hear — you can immerse yourself in music and podcasts, or simply stay focused, like never before."
      />
      <BannerNewsSection
        imageSrc="https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_listening-experience-2_12082020_big_carousel.jpg.large.jpg"
        // title="Apple Headphones"
        // description=""
      />
      <CardsGrid CategoryName="Apple Headphones"/>
    </Container>

  );
};

export default NewsPage;
