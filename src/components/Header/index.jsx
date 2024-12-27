import "./style.scss";
import logo from "../../assets/images/lg1.webp"

export default function Header() {
  return (
    <header>
      <div className="dg1" />
      <main>
        <section className="LogoEmpresa">
            <img src={logo} alt="" />
            <h1>GMPBS</h1>
        </section>
        <nav>
            <a href="">Navegação 1</a>
            <a href="">Navegação 2</a>
            <a href="">Navegação 3</a>
            <a href="">Navegação 4</a>
        </nav>
        <section>
          <img src={logo} alt="Imagem do Usuário" />
          <h3>Username</h3>
        </section>
      </main>
      <div className="dg2"/>
    </header>
  );
}
