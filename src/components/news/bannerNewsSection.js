import React from 'react';

const BannerNewsSection = ({ imageSrc, title, description }) => {
  return (
    <section style={styles.container}>
      <img src={imageSrc} alt={title} style={styles.image} />
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '600px', // Adjust the height as needed
    overflow: 'hidden',
    marginTop:'4rem'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '15px',
  },
  textContainer: {
    position: 'absolute',
    top: '26%',
    right: '1%',
    transform: 'translateY(-50%)',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'left',
    maxWidth: '400px',
    
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#ffffff',
  },
  description: {
    fontSize: '1.4rem',
    color: '#ffffff',

  },
};

export default BannerNewsSection;
