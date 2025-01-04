import Header from "../components/Header";
import SignUpSection from "../components/SignUpSection";
import Footer from "../components/Footer";

import "../style/SignUp.scss";

export default function SignUp() {
    return (
        <main className="SignUpContainer">
            <Header/>
            <SignUpSection/>
            <div className="SignUpFooter">
                <div className="degrade1"/>
                <Footer/>
            </div>
        </main>
    );
}