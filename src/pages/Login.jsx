import Header from "../components/Header";
import LoginSection from "../components/LoginSection";
import Footer from "../components/Footer";

import "../style/Login.scss";

export default function Login() {
    return (
        <main className="LoginContainer">
            <Header/>
            <LoginSection/>
            <div className="LoginFooter">
                <div className="degrade1"/>
                <Footer/>
            </div>
        </main>
    );
}