import "./style.scss";
import { logo, SearchButton, FilterButton } from "../../assets/images/index";

export default function Header() {
  return (
    <header>
      <div className="dg1" />
      <main>
        <section className="LogoEmpresa">
          <img src={logo} alt="" />
          <h1>GMPBS</h1>
        </section> 
        <div className="SearchBarContainer">
          <button className="search">
            <img src={SearchButton} alt="Botão de busca" />
          </button>
          <input type="text" name="SearchBar" />
          <button className="filter">
            <img src={FilterButton} alt="Botão do Filtro" />
          </button>
        </div>
        <section>
          <img src={logo} alt="Imagem do Usuário" />
          <h3>Username</h3>
        </section>
      </main>
      <div className="dg2" />
    </header>
  );
}
