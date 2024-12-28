import React from 'react';

const MacOSSection = () => {
  return (
    <section style={styles.container}>
      {/* Background Image */}
      <img
        src="https://www.apple.com/v/imac/s/images/overview/product-stories/apps/apps_bottom__bv2898tmgdyu_large.png"
        alt="Background"
        style={styles.backgroundImage}
      />
      
      {/* Text Content */}
      <div style={styles.textContent}>
        <h1 style={styles.title}>macOS.</h1>
        <h2 style={styles.subtitle}>Let your apps fly.</h2>
        <p style={styles.description}>
          iMac comes loaded with incredible built-in apps, industry-leading privacy and security,
          and amazing features for work and play. macOS brings more speed and responsiveness to all
          your go-to apps — from Microsoft Word, Excel, and Outlook to Slack, Canva, and Adobe Photoshop.
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    marginTop: '4rem',
    position: 'relative',
    width: '100%',
    height: '760px',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Ensure it stays behind the text
  },
  textContent: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional for better text visibility
    padding: '20px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default MacOSSection;
