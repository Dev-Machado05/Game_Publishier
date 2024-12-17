import buttonImage from "../../assets/images/button-right.svg";
import "./style.scss";

import React, { useEffect, useState } from "react";

export default function Carroussel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const totalImages = 20;

  useEffect(() => {
    const HandleScreenResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", HandleScreenResize);
    HandleScreenResize();
    return () => window.removeEventListener("resize", HandleScreenResize);
  }, []);

  const handlePrevClick = () => {
    const carroussel = document.querySelector(".carroussel");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    carroussel.scrollBy(-screenWidth, 0);

    setScrollPosition(carroussel.scrollRight);
  };

  const handleNextClick = () => {
    const carroussel = document.querySelector(".carroussel");
    carroussel.scrollBy(screenWidth, 0);

    setScrollPosition(carroussel.scrollLeft);
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
                key={i}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`}
                alt={`Imagem ${i}`}
              />
            )
          )}
        </main>
      </nav>
      <button className="Prev" onClick={handlePrevClick}>
        <img src={buttonImage} alt="Botão anterior" />
      </button>
      <button className="Next" onClick={handleNextClick}>
        <img src={buttonImage} alt="Botão próximo" />
      </button>
    </section>
  );
}
