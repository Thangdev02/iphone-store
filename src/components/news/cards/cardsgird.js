import React from 'react';
import { FaSmile, FaTruck, FaApple, FaCommentDots, FaLock } from 'react-icons/fa'; // Use react-icons
import Card from './card';

const CardsGrid = ({CategoryName}) => {
  const cards = [
    {
      icon: <FaSmile />,
      title: 'Personalize your AirPods for free.',
      description: 'Engrave your AirPods with your initials or favorite emoji — free. Only at Apple.',
      action: <span>+</span>, // Example of action
    },
    {
      icon: <FaTruck />,
      title: 'Get flexible delivery and easy pickup.',
      description: 'Choose 2-hour delivery from an Apple Store, free delivery, or easy pickup options.',
      action: <span>+</span>,
    },
    {
      icon: <FaApple />,
      title: 'Pay over time, interest-free.',
      description: 'When you choose to check out with Apple Card Monthly Installments.',
      action: <span>+</span>,
    },
    {
      icon: <FaCommentDots />,
      title: 'Shop live with a Specialist.',
      description: 'Let us guide you live over video and answer all of your questions.',
      action: <span>+</span>,
    },
    {
      icon: <FaLock />,
      title: 'Explore secure shopping.',
      description: 'Use the Apple Store app for a personalized and secure shopping experience.',
      action: <span>+</span>,
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Why Apple is the best place to buy {CategoryName}.</h2>
      <div style={styles.grid}>
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            action={card.action}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    marginTop:'4rem'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
    fontWeight: 'bold',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-around',
  },
};

export default CardsGrid;
