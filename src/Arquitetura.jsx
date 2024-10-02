import React, { useState, useEffect } from "react";
import nvidiaXamd from "./nvidiaXamd.jpeg";

const Arquitetura = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
        }
        return newProgress;
      });
    }, 100);
  }, []);

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
    imageContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: loading ? "block" : "none",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    progressBar: {
      position: "absolute",
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: "20px",
      backgroundImage:
        "linear-gradient(to right, #000000 25%, #2cc22c 50%, #8B0000 75%, #ffffff 100%)",
    },
  };

  return (
    <div className="containerArquitetura">
      {loading ? (
        <div style={styles.imageContainer}>
          <img src={nvidiaXamd} alt="Loading" style={styles.image} />
          <div style={styles.progressBar}></div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Arquitetura;
