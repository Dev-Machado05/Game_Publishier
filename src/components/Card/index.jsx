import "./style.scss";
import {
  XboxIcon,
  WindowsIcon,
  AppleIcon,
  PlayStationIcon,
  NintendoIcon,
  AndroidIcon,
} from "../../assets/images";
import { Navigate } from "react-router-dom";

export default function Card({
  Image,
  Xbox,
  Windows,
  Apple,
  PlayStation,
  Nintendo,
  Android,

  id,
}) {
  // Mapeamento entre nomes e ícones
  const IconMap = {
    Xbox: XboxIcon,
    Windows: WindowsIcon,
    Apple: AppleIcon,
    PlayStation: PlayStationIcon,
    Nintendo: NintendoIcon,
    Android: AndroidIcon,
  };

  const Platforms = {
    Xbox,
    Windows,
    Apple,
    PlayStation,
    Nintendo,
    Android,
  };

  const ActivatedIcons = Object.entries(Platforms)
    .filter(([name, value]) => value)
    .map(([name]) => name);

  return (
    <main className="CardContainer">
      <a href={`/GamePreview/${id}`}>
        <img src={Image} alt="" />
        <h3>Disponível em:</h3>
        <section>
          <figure className="AvContainer">
            {ActivatedIcons.map((platform) => (
              <img key={platform} src={IconMap[platform]} alt={platform} />
            ))}
          </figure>
        </section>
      </a>
    </main>
  );
}
