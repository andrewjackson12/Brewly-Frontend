const SignInPage = () => {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Sign In</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Username" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button type="submit" style={styles.button}>Sign In</button>
        </form>
      </div>
    );
  };
  
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '2rem',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center' as const,
      marginBottom: '1rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    input: {
      padding: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    button: {
      padding: '0.75rem',
      backgroundColor: '#6f4e37',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      borderRadius: '5px',
    },
  };
  
  export default SignInPage;
  