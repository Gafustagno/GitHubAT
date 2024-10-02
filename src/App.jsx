import React, { useState } from "react";
import "./styles.css";
import Logo from "./Logo.png";
import Card from "./Card.jsx";
import Comparativo from "./Comparativo";
import Menu from "./Menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rtx4060 from "./Rtx4060.png";
import Rtx4070super from "./Rtx4070super.png";
import Rtx4070TiSuper from "./Rtx4070TiSuper.png";
import Rtx4080super from "./Rtx4080super.png";
import Rtx4090 from "./Rtx4090.png";
import Rx7600xt from "./Rx7600xt.png";
import Rx7700xt from "./Rx7700xt.png";
import Rx7800xt from "./Rx7800xt.png";
import Rx7900xtx from "./Rx7900xtx.png";
import Arquitetura from "./Arquitetura";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./App.module.css";

export default function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [showComparativo, setShowComparativo] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showArquitetura, setShowArquitetura] = useState(false);

  const handleSelectCard = (titulo) => {
    setSelectedCards((prev) =>
      prev.includes(titulo)
        ? prev.filter((item) => item !== titulo)
        : [...prev, titulo]
    );
  };

  const handleCompare = () => {
    if (selectedCards.length > 0) {
      setShowComparativo(true);
    } else {
      alert("Selecione pelo menos uma placa para comparar.");
    }
  };

  const handleHome = () => {
    setShowComparativo(false);
    setShowArquitetura(false);
    setSelectedCards([]);
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (item) => {
    if (item === "Home") {
      handleHome();
    } else if (item === "Comparativo") {
      setShowComparativo(true);
      setShowArquitetura(false);
    } else if (item === "Sobre") {
      alert(
        "Projeto realizado para fins de Avaliação (AT) - Mobile-First UI com React - 24E3_1"
      );
    } else if (item === "Arquitetura") {
      setShowArquitetura(true);
      setShowComparativo(false);
    } else if (item === "Modo Escuro" || item === "Modo Claro") {
      setIsDarkMode((prevMode) => !prevMode);
    }
    setShowMenu(false);
    setIsMenuOpen(false);
  };

  const toggleHamburgerMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
          <span className="hamburger-icon">&#9776;</span>
        </div>

        <ul className={`nav-items ${isMenuOpen ? "nav-items-open" : ""}`}>
          <li className="nav-item" onClick={handleHome}>
            HOME
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => {
              if (!isMenuOpen) {
                setShowMenu(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMenuOpen) {
                setShowMenu(false);
              }
            }}
          >
            MENU
            {showMenu && !isMenuOpen && (
              <Menu
                onMenuItemClick={handleMenuItemClick}
                isDarkMode={isDarkMode}
              />
            )}
          </li>
        </ul>

        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="hamburger-dropdown menu">
          <ul className="menu-items">
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("Home")}
            >
              Home
            </li>
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("Sobre")}
            >
              Sobre
            </li>
            <li
              className="menu-item"
              onClick={() => handleMenuItemClick("Arquitetura")}
            >
              Arquitetura
            </li>
            <li className="menu-item" onClick={toggleDarkMode}>
              {isDarkMode ? "Modo Claro" : "Modo Escuro"}
            </li>
          </ul>
        </div>
      )}

      {!showComparativo && !showArquitetura ? (
        <div className="container">
          <main className="main">
            <h1></h1>

            <button onClick={handleCompare} className="compare-button">
              Comparar
            </button>
            <div className="carousel-container">
              <Slider {...carouselSettings}>
                <div>
                  <Card
                    imagem={Rtx4060}
                    titulo="Aorus - Nvidia RTX 4060Ti"
                    preco="$400.00"
                    onSelection={handleSelectCard}
                  />
                </div>
                <div>
                  <Card
                    imagem={Rtx4070super}
                    titulo="Aorus - Nvidia RTX 4070 Super"
                    preco="$600.00"
                    onSelection={handleSelectCard}
                  />
                </div>
                <div>
                  <Card
                    imagem={Rtx4070TiSuper}
                    titulo="Aorus - Nvidia RTX 4070 Ti Super"
                    preco="$800.00"
                    onSelection={handleSelectCard}
                  />
                </div>
                <div>
                  <Card
                    imagem={Rtx4080super}
                    titulo="Aorus - Nvidia RTX 4080 Super"
                    preco="$1000.00"
                    onSelection={handleSelectCard}
                  />
                </div>
                <div>
                  <Card
                    imagem={Rtx4090}
                    titulo="Aorus - Nvidia RTX 4090"
                    preco="$1600.00"
                    onSelection={handleSelectCard}
                  />
                </div>
                <div>
                  <Card
                    imagem={Rx7600xt}
                    titulo="Gigabyte - AMD Radeon 7600XT"
                    preco="$249.00"
                    onSelection={handleSelectCard}
                  />
                </div>
                <div>
                  <Card
                    imagem={Rx7700xt}
                    titulo="Gigabyte - AMD Radeon 7700XT"
                    preco="$349.00"
                    onSelection={handleSelectCard}
                  />
                </div>
                <div>
                  <Card
                    imagem={Rx7800xt}
                    titulo="Gigabyte - AMD Radeon 7800XT"
                    preco="$479.00"
                    onSelection={handleSelectCard}
                  />
                </div>
                <div>
                  <Card
                    imagem={Rx7900xtx}
                    titulo="Aorus - AMD Radeon 7900XTX"
                    preco="$899.00"
                    onSelection={handleSelectCard}
                  />
                </div>
              </Slider>
            </div>
          </main>

          <footer className="footer">
            Mobile-first UI com React 24E3_1 - AT
            <p>Gabriel Sá Fustagno - 2024</p>
            <div className={styles.toggleContainer}>
              <div className={styles.toggleSwitch} onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
              </div>
            </div>
          </footer>
        </div>
      ) : null}

      {showComparativo && <Comparativo selectedCards={selectedCards} />}

      {showArquitetura && <Arquitetura />}
    </div>
  );
}
