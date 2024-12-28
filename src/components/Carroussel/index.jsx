import buttonImage from "../../assets/images/button-right.svg";
import "./style.scss";

import React, { useEffect, useState } from "react";

export default function Carroussel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const totalImages = 24;

  useEffect(() => {
    const HandleScreenResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", HandleScreenResize);
    HandleScreenResize();
    return () => window.removeEventListener("resize", HandleScreenResize);
  }, []);

  const handleClick = (direction) => {
    const carroussel = document.querySelector(".carroussel");

    if (direction === "prev") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
      );
      carroussel.scrollBy({ 
        left: -screenWidth, 
        behavior: "smooth" //imlementa a animação de scroll no eixo X
      });
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % totalImages
      );
      carroussel.scrollBy({ 
        left: screenWidth, 
        behavior: "smooth" 
      });
    };
  };

  return (
    <section className="CarrousselContainer">
      <nav className="carroussel">
        <main className="CarrousselContent">
          {Array.from(
            { length: totalImages },
            (
              _,
              i // cards
            ) => (
              <img
                key={i + 1}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  i + 1
                }.png`}
                alt={`Imagem ${i + 1}`}
              />
            )
          )}
        </main>
      </nav>
      <button className="Prev" onClick={() => handleClick("prev")}>
        <img src={buttonImage} alt="Botão anterior" />
      </button>
      <button className="Next" onClick={() => handleClick("next")}>
        <img src={buttonImage} alt="Botão próximo" />
      </button>
    </section>
  );
}
