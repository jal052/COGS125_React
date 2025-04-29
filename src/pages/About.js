export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundColor: "#f0f4ff",
    flexDirection: "column",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
  },

};