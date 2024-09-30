import React, { useState } from 'react';
import {CardArtigo} from '../CardArtigo'; 
import infosArtigos from './infosArtigos'; 
import botaoAnterior from '../../../assets/Artigos/botaoAnterior.png';
import botaoDepois from '../../../assets/Artigos/botaoAnterior.png';

export const Artigos = () => {
    const [artigoAtual, setArtigoAtual] = useState<number>(0);

    const btAnterior = () => {
        setArtigoAtual((prev) => (prev > 0 ? prev - 1 : infosArtigos.artigoSBC.length - 1)); // Volta para o último artigo se estiver no primeiro
    };

    const btDepois = () => {
        setArtigoAtual((prev) => (prev < infosArtigos.artigoSBC.length - 1 ? prev + 1 : 0)); // Volta para o primeiro artigo se estiver no último
    };
        
    return (
        <div>
            <h1><span>Navegue pelos</span> Artigos Publicados</h1>
            {infosArtigos.artigoSBC.map(infos => (
                <CardArtigo
                    id={infos.id}
                    tituloArtigo={infos.tituloArtigo}
                    textoArtigo={infos.textoArtigo}
                    imagemArtigo={infos.imagemArtigo}
                    altArtigo={infos.altArtigo}
                    revistaArtigo={infos.revistaArtigo}
                    IssnArtigo={infos.IssnArtigo}
                />
            ))}
            
            {infosArtigos.artigoTeste.map(infos => (
                <CardArtigo
                    id={infos.id} 
                    tituloArtigo={infos.tituloArtigo}
                    textoArtigo={infos.textoArtigo}
                    imagemArtigo={infos.imagemArtigo}
                    altArtigo={infos.altArtigo}
                    revistaArtigo={infos.revistaArtigo}
                    IssnArtigo={infos.IssnArtigo}
                />
            ))}
            <div className='flex flex-row'>
                <img onClick={btAnterior} src={botaoAnterior} alt="botao para artigo anterior" />
                <img onClick={btDepois} src={botaoDepois} alt="botao para o proximo artigo" />
            </div>
        </div>
    );
};
