import React from 'react';

const Card = ({ icon, title, description, action }) => {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      {action && <div style={styles.action}>{action}</div>}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    flex: '1 1 calc(20% - 1rem)', // For responsive layout
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: '2rem',
    color: '#000',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '1rem',
  },
  action: {
    fontSize: '1.5rem',
    color: '#007aff',
    alignSelf: 'flex-end',
  },
};

export default Card;
