import "./style.scss";

export default function LoginSection() {
  return (
    <div className="LoginSectionContainer">
      <main className="LoginSectionContent">
        <h1>Login</h1>
        <section>
          <label>Digite</label>
          <input type="text" name="Email" placeholder="Email:" />
        </section>
        <section>
          <label>Digite</label>
          <input type="password" name="Password" placeholder="Senha:"/>
        </section>
        <a href="">Esqueceu a senha:</a>
        <a href="/SignUp">Criar uma conta:</a>
        <button>Back</button>
        <button>Login</button>
      </main>
    </div>
  );
}
