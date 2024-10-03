import { useState } from 'react';
import { CardArtigo } from '../CardArtigo'; // Importando o componente CardArtigo
import infosArtigos from './infosArtigos'; // Importando o arquivo infosArtigos
import { BotaoVoltarProximo } from '../../Micro/BotaoVoltarProximo';// Importando o componente BotaoVoltarProximo
import folha from "../../../assets/Artigos/folhaDeDecoracao.png"

export const Artigos = () => {
    // criacao da logica para navegar entre os artigos
    const [artigoAtual, setArtigoAtual] = useState<number>(0);

    const artigos = [...infosArtigos.artigoSBC, ...infosArtigos.artigoTeste];

    const btAnterior = () => {
        setArtigoAtual((prev) => (prev > 0 ? prev - 1 : artigos.length - 1));
    };

    const btDepois = () => {
        setArtigoAtual((prev) => (prev < artigos.length - 1 ? prev + 1 : 0));
    };

    return (
        // Renderização do componente CardArtigo
        <div id='artigos'>
            <div className="flex flex-row">
                <h1><span>Navegue pelos</span> Artigos Publicados</h1>
                {/* Renderização o conteudo do infoArtigos*/}
                <CardArtigo
                    id={artigos[artigoAtual].id}
                    tituloArtigo={artigos[artigoAtual].tituloArtigo}
                    textoArtigo={artigos[artigoAtual].textoArtigo}
                    imagemArtigo={artigos[artigoAtual].imagemArtigo}
                    altArtigo={artigos[artigoAtual].altArtigo}
                    revistaArtigo={artigos[artigoAtual].revistaArtigo}
                    IssnArtigo={artigos[artigoAtual].IssnArtigo}
                />
                <img src={folha} alt="" />
            </div>

            {/*importando o componente BotaoVoltarProximo*/}
            <BotaoVoltarProximo btAnterior={btAnterior} btDepois={btDepois} />
        </div>
    );
};
