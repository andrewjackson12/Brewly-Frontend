import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Brewly - Another Cup of Joe</h1>
      <Link to="/signin">
        <button style={styles.button}>Sign In</button>
      </Link>
    </header>
  );
};

const styles = {
    header: {
        width: '100%',               // Ensures full width
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#6f4e37',
        color: '#fff',
        boxSizing: 'border-box' as const,     // Prevents padding from affecting width
      },
      title: {
        margin: 0,
        fontFamily: "'Lobster', cursive", // Applying a custom font
        fontSize: '2rem',
      },
      button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#d9a066',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1rem',
        borderRadius: '5px',
        fontFamily: "'Roboto', sans-serif", // Optional: custom font for button
      },
};

export default Header;
