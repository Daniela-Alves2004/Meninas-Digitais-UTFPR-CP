interface CardArtigoProps {
    id: string;
    tituloArtigo: string;
    textoArtigo: string;
    imagemArtigo: string;
    altArtigo: string;
    revistaArtigo: string;
    IssnArtigo: string;

}

export const CardArtigo = ({ tituloArtigo, textoArtigo, imagemArtigo, altArtigo, revistaArtigo, IssnArtigo }: CardArtigoProps) => {
    return (
        <div className="flex flex-row" >
            <div>
                <img src={imagemArtigo} alt={altArtigo} />
                <p>{revistaArtigo}</p>
                <p>{IssnArtigo}</p>
            </div>
            <div>
                <h2>{tituloArtigo}</h2>
                <p>{textoArtigo}</p>
            </div>
        </div>
    );
};