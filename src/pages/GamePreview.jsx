import { useParams } from "react-router-dom";
import "../style/GamePreview.scss";

import Header from "../components/Header";
import Games from "../SimBackend";
import Footer from "../components/Footer";

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
      {/* <ImageCarroussel/> */}
      <section className="Description">
        <h3>Descrição</h3>
        <p>{`${Game.description}`}</p>

        <section className="AnchorContainer"> {/*    ----------- Adicionar um display grid para manter uma estrutura 2x3 */}
          
          {Object.entries( Game.platform ) // Converte o objeto Game.platform em um array de pares [chave, valor]
            .filter(([ platform, available ]) => available) // Filtra apenas as entradas onde o valor (available) é true.
            .map(([ platform ]) => ( // Mapeia as chaves restantes para criar um link <a> correspondente.
                <>
                  <br />
                  <a href="" key={platform}> {/* ------ arrumar o link, possivelmente adicionar no BD simulado */}
                    {platform}
                  </a>
                </>
              )
            )}
        </section>
      </section>
      <Footer />
    </main>
  );
}
