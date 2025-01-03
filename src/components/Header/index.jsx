import "./style.scss";
import { logo, SearchButton, FilterButton } from "../../assets/images/index";

export default function Header() {
  return (
    <header>
      <div className="dg1" />
      <main>
        <a href="/">
          <section className="LogoEmpresa">
            <img src={logo} alt="Logo da empresa" />
            <h1>GMPBS</h1>
          </section>
        </a>
        <div className="SearchBarContainer">
          <button className="search">
            <img src={SearchButton} alt="Botão de busca" />
          </button>
          <input type="text" name="SearchBar" placeholder="Pesquisar" />
          <button className="filter">
            <img src={FilterButton} alt="Botão do Filtro" />
          </button>
        </div>
        <a href="/Login">
          <section>
            <img src={logo} alt="Imagem do Usuário" />
            <h2>Username</h2>
          </section>
        </a>
      </main>
      <div className="dg2" />
    </header>
  );
}
