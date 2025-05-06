export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome</h1>
      <p style={styles.beginnningtext}>My name is Jasmine Lam. I am currently a Cognitive Science with Design and Interaction student at UCSD.</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    flexDirection: "column",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
  },
};