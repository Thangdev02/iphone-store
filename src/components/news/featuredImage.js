import React from 'react';

const FeatureWithImage = ({ imageSrc, icon, title, description }) => {
  return (
    <section style={styles.container}>
      <div style={styles.imageWrapper}>
        <img src={imageSrc} alt={title} style={styles.image} />
      </div>
      <div style={styles.textWrapper}>
        {icon && <div style={styles.icon}>{icon}</div>}
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
    borderRadius: '12px',
    overflow: 'hidden',

  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
  },
  textWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '2rem',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#000',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default FeatureWithImage;
