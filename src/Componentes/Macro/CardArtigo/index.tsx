//define o tipo de cada propriedade do componente CardArtigo
interface CardArtigoProps {
    id: string;
    tituloArtigo: string;
    textoArtigo: string;
    imagemArtigo: string;
    altArtigo: string;
    revistaArtigo: string;
    IssnArtigo: string;

}
//cria um props para tipar os valores do componente CardArtigo
export const CardArtigo = ({ tituloArtigo, textoArtigo, imagemArtigo, altArtigo, revistaArtigo, IssnArtigo }: CardArtigoProps) => {
    return (
        //estrutura do componente CardArtigo
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