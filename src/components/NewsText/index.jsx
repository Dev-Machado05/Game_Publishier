import "./style.css";

export default function NewsText() {
    return (
        <div className="NewsTextContainer">
            <p>
                {Array.from({ length: 20 }, (_, i) => (
                    <span> • Texto de Exemplo</span>
                ))}
            </p>
        </div>
    );
}