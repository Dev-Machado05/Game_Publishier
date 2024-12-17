import NewsText from "../components/NewsText";
import Header from "../components/Header";
import Carroussel from "../components/Carroussel";
import ConsoleSec from "../components/ConsoleSection";
import Footer from "../components/Footer";
import "../style/Home.scss";


export default function Home() {
    return (
        <>
            <NewsText/>
            <Header/>
            <Carroussel/>
            <div className="dg3"/>
            <ConsoleSec Console="Crossplay"/>
            <div className="dg4"/>
            <ConsoleSec Console="PlayStation"/>
            <div className="dg5"/>
            <ConsoleSec Console="Xbox"/>
            <div className="dg6"/>
            <ConsoleSec Console="Nintendo"/>
            <div className="dg7"/>
            <Footer/>

        </>
    );
}