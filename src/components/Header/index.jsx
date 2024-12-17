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
            <ul>
                <li>t1</li>
                <li>t2</li>
                <li>t3</li>
                <li>t4</li>
            </ul>
        </nav>
      </main>
      <div className="dg2"/>
    </header>
  );
}
