import React from 'react';

const ImacTextSection = ({ title, subtitle, description }) => {
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
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#6a5acd', // Adjust color to match the design
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.8rem',
    color: '#555',
    lineHeight: '1.5',
  },
};

export default ImacTextSection;
