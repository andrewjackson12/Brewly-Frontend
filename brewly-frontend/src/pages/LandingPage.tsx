import { Link } from 'react-router-dom';
import coffeeTest from '../assets/images/coffee-test.jpg';

const coffeeImages = [
    'https://source.unsplash.com/glass-cup-filled-with-ice-latte-on-tabletop-L-sm1B4L1Ns',
    'https://source.unsplash.com/600x400/?coffee-beans',
    'https://source.unsplash.com/600x400/?cappuccino',
    'https://source.unsplash.com/600x400/?espresso',
  ];
  
  const LandingPage = () => {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Welcome to the Coffee Lovers' Hub</h2>
        <Link to="/posts">
        <button>View Posts</button>
        </Link>
        <div style={styles.imageGrid}>
        <img src={coffeeTest} alt="newest coffee"></img>
        <img src="../assets/images/coffee-test.jpg" alt="newest coffee different"></img>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      textAlign: 'center' as const,
      padding: '2rem',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    imageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
  };
  
  export default LandingPage;
  