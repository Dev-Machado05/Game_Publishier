import { useParams } from "react-router-dom";
import "../style/GamePreview.scss";

import Header from "../components/Header";
import ImageCarroussel from "../components/Carroussel";
import Games from "../SimBackend";
import Footer from "../components/Footer";
import React from "react";

export default function GameDescription() {
  //Adquirindo o id do produto
  const { id } = useParams();
  const Game = Games[id];

  console.log(id);

  return (
    <main className="GamePreviewContainer">
      <Header />
      <section className="GameTitle">
        <h1>{`${Game.name}`}</h1>
        <h2>{`${Game.developer} • ${Game.genre} • ${Game.genre2}`}</h2>
      </section>
      <div className="degrade1" />
      <section className="GameCarroussel">
        <ImageCarroussel />
      </section>
      <div className="degrade2" />

      <div className="degrade1" />
      <section className="Description">
        <h3>Descrição:</h3>
        <main>
          {Game.description.split("\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </main>

        <h3>Links:</h3>
        <section className="AnchorContainer">
          {Object.entries(Game.platform) // Converte o objeto Game.platform em um array de pares [chave, valor]
            .filter(([platform, available]) => available) // Filtra apenas as plataformas disponíveis (valor true)
            .map(
              (
                [platform] // Mapeia as plataformas disponíveis para links
              ) => (
                <div className="LinkContent">
                  <a
                    href={Game.links[`${platform}Link`]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform}
                  </a>
                </div>
              )
            )}
        </section>
      </section>
      <div className="degrade3" />
      <Footer />
    </main>
  );
}
