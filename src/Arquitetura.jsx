import React from "react";

const Arquitetura = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f0f0f0",
      minHeight: "100vh",
      background: "linear-gradient(#000000, #2cc22c, #8B0000, #000000)",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#ffffff",
      fontFamily: "verdana",
    },
    video: {
      width: "100%",
      height: "50vh",
      marginBottom: "20px",
    },
  };

  return (
    <div className="containerArquitetura">
      <div style={styles.container}>
        <h1 style={styles.title}>Nvidia</h1>
        <iframe
          style={styles.video}
          src="https://www.youtube.com/embed/fj245xMr-BM"
          title="Video Nvidia"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <h1 style={styles.title}>AMD Radeon</h1>
        <iframe
          style={styles.video}
          src="https://www.youtube.com/embed/XAGFS8d_qLw"
          title="Video AMD Radeon"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Arquitetura;
