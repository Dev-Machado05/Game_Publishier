import { useEffect, useState, useRef } from "react";
import "./style.scss";
import Card from "../Card";
import {
  CrossplayIcon,
  CrossplayIcon2,
  PlayStationIcon,
  XboxIcon,
  NintendoIcon,
  TerrariaImg,
  NextButton,
} from "../../assets";

const icons = {
  Crossplay: CrossplayIcon,
  PlayStation: PlayStationIcon,
  Xbox: XboxIcon,
  Nintendo: NintendoIcon,
};

export default function ConsoleSection({ Console }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const carrouselRef = useRef(null); // Referência ao elemento do carrossel

  const CardArrays = {
    Crossplay: [
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
    ],
    PlayStation: [
      {
        Image: TerrariaImg,
        Xbox: false,
        Windows: true,
        Apple: false,
        PlayStation: true,
        Nintendo: false,
        Android: false,
      },
      {
        Image: TerrariaImg,
        Xbox: false,
        Windows: true,
        Apple: false,
        PlayStation: true,
        Nintendo: false,
        Android: false,
      },
      {
        Image: TerrariaImg,
        Xbox: false,
        Windows: true,
        Apple: false,
        PlayStation: true,
        Nintendo: false,
        Android: false,
      },
      {
        Image: TerrariaImg,
        Xbox: false,
        Windows: true,
        Apple: false,
        PlayStation: true,
        Nintendo: false,
        Android: false,
      },
      {
        Image: TerrariaImg,
        Xbox: false,
        Windows: false,
        Apple: false,
        PlayStation: true,
        Nintendo: false,
        Android: false,
      },
      {
        Image: TerrariaImg,
        Xbox: false,
        Windows: true,
        Apple: false,
        PlayStation: true,
        Nintendo: false,
        Android: false,
      },
    ],
    Xbox: [
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
    ],
    Nintendo: [
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
      {
        Image: TerrariaImg,
        Xbox: true,
        Windows: true,
        Apple: true,
        PlayStation: true,
        Nintendo: true,
        Android: true,
      },
    ],
  };

  const CardArray = CardArrays[Console];

  // Atualiza o tamanho da tela
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollCarrousel = (direction) => {
    if (carrouselRef.current) {
      const scrollValue = screenWidth / 2; // Rola metade da largura da tela
      carrouselRef.current.scrollBy({
        left: direction === "next" ? scrollValue : -scrollValue,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="ConsoleContainer" id={`${Console}Container`}>
      <header>
        <img src={icons[Console] || null} alt="" />
        <h1>{Console}</h1>
        {Console === "Crossplay" && <img src={CrossplayIcon2} alt="" />}
      </header>

      <main className="ConsoleContent">
        <div className="ConsoleCarroussel" ref={carrouselRef}>
          {CardArray.map((cardData, i) => (
            <Card key={i} {...cardData} />
          ))}
        </div>
      </main>

      <button className="PrevButtom" onClick={() => scrollCarrousel("prev")}>
        <img src={NextButton} alt="Anterior" />
      </button>
      <button className="NextButtom" onClick={() => scrollCarrousel("next")}>
        <img src={NextButton} alt="Próximo" />
      </button>
    </section>
  );
}
