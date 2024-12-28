import React from 'react';

const DisplaySection = ({ title, subtitle, description }) => {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <h2 style={styles.subtitle}>{subtitle}</h2>
      <p style={styles.description}>{description}</p>
    </section>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ea7500', // Adjust color to match the design
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.5',
  },
};

export default DisplaySection;
