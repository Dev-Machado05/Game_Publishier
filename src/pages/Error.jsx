import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../style/Error.scss";

export default function Error() {
    return(
        <main className="ErrorContainer">
            <Header/>
            <Hero Page="Error"/>
            <footer className="ErrorFooter">
                <div className="degrade1"/>
                <Footer/>
            </footer>
        </main>
    );
}