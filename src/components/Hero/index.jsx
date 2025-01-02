import { CloudOff } from "../../assets/images";
import "./style.scss";

export default function Hero({ Page }) {
  return Page === "Error" ? (
    <>
      <div className="Hero">
        <section className="ErrorTitle">
          <h1>Erro 404</h1>
          <img src={CloudOff} alt="Background" />
        </section>
        <p>A página que você procura não foi encontrada.</p>
      </div>
    </>
  ) : (
    <div className="Hero">
      <img src="https://picsum.photos/1920/1080" alt="Background" />
      <div className="HeroContent">
        <h1>Gaming Mastery Platform</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}
