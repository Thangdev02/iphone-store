import React from 'react';

const FeatureSection = ({ title, description, image }) => (
  <section style={{ marginTop: '4rem', display: 'flex', flexDirection:'column',gap: '1rem' ,justifyContent: 'center' ,alignItems: 'center', margin: '2rem 0' }}>
    {image && <img src={image} alt={title} style={{ width: '24%'}} />}
    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', textAlign: 'center',gap: '1rem' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </section>
);

export default FeatureSection;
