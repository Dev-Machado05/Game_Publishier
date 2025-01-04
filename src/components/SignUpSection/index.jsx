import "./style.scss";

export default function SignUpSection() {
  return (
    <div className="SignUpSectionContainer">
      <main className="SignUpSectionContent">
        <h1>SignUp</h1>
        <section>
          <label>Digite o seu email:</label>
          <input type="text" name="Email" placeholder="Email:" />
        </section>
        <section>
          <label>Digite a sua senha:</label>
          <input type="password" name="Password" placeholder="Senha:" />
        </section>
        <section>
          <label>Confirme a sua senha:</label>
          <input type="password" name="Password" placeholder="Senha:" />
        </section>
        <a href="">Esqueceu a senha:</a>
        <a href="/SignUp">Já tem uma conta:</a>
        <div className="ButtonContainer">
          <button className="BackButton">Back</button>
          <button className="NextButton">SignUp</button>
        </div>
      </main>
    </div>
  );
}
