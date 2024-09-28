import Botao from "../../Micro/Botao";
import folhaMarromCima from "../../../assets/SobreMD/folhaMarromCima.png";
import fotoEquipe from "../../../assets/SobreMD/fotoEquipe.png";
import decoracaoEquipe from "../../../assets/SobreMD/decoracaoEquipe.png";
import folhaMarromBaixo from "../../../assets/SobreMD/folhaMarromBaixo.png";

export const SobreMD = () => {
    return (
        <div className="flex flex-row bg-primaria">
            <img className="w-16 h-10" src={folhaMarromCima} alt="Folha marrom de decoração" />

            <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold mb-2">
                    Sobre as <br /> <span>Meninas Digitais UTFPR-CP</span>
                </h1>
                <p className="mb-5">
                    O projeto foi criado em 2023 na UTFPR-CP com o objetivo de apoiar e estimular a participação de meninas na computação, incentivando estudantes do ensino fundamental e médio de escolas públicas de Cornélio Procópio e região. Trabalhamos temas voltados à resolução de desafios, por meio de oficinas, palestras, minicursos, rodas de conversa e participação em uma competição global de inovação, chamada Technovation Girls.
                </p>
                <Botao className="primario color-white" label="VER MAIS" onClick={() => console.log("Ver mais clicado")} />
            </div>

            <div className="flex flex-col justify-start">
                <img className="bg-background z-20" src={decoracaoEquipe} alt="Decoração em formato de bandeira na foto da equipe" />
                <img className="bg-red-500 z-10" src={fotoEquipe} alt="Foto da equipe do projeto Meninas Digitais UTFPR-CP" />
            </div>

            <img className="w-16 h-10 self-end" src={folhaMarromBaixo} alt="Folha marrom de decoração" />
        </div>
    );
};
