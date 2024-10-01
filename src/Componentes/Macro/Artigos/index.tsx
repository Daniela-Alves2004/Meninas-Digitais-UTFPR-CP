import React, { useState } from 'react';
import { CardArtigo } from '../CardArtigo';
import infosArtigos from './infosArtigos';
import botaoAnterior from '../../../assets/Artigos/botaoAnterior.png';
import botaoDepois from '../../../assets/Artigos/botaoDepois.png'; 

export const Artigos = () => {
    const [artigoAtual, setArtigoAtual] = useState<number>(0);

    const artigos = [...infosArtigos.artigoSBC, ...infosArtigos.artigoTeste]; 

    const btAnterior = () => {
        setArtigoAtual((prev) => (prev > 0 ? prev - 1 : artigos.length - 1)); 
    };

    const btDepois = () => {
        setArtigoAtual((prev) => (prev < artigos.length - 1 ? prev + 1 : 0)); 
    };

    return (
        <div>
            <h1><span>Navegue pelos</span> Artigos Publicados</h1>

            <CardArtigo
                id={artigos[artigoAtual].id}
                tituloArtigo={artigos[artigoAtual].tituloArtigo}
                textoArtigo={artigos[artigoAtual].textoArtigo}
                imagemArtigo={artigos[artigoAtual].imagemArtigo}
                altArtigo={artigos[artigoAtual].altArtigo}
                revistaArtigo={artigos[artigoAtual].revistaArtigo}
                IssnArtigo={artigos[artigoAtual].IssnArtigo}
            />

            <div className='flex flex-row justify-center'>
                <button onClick={btAnterior}>
                    <img src={botaoAnterior} alt="botao para artigo anterior" />
                </button>
                <button onClick={btDepois}>
                    <img src={botaoDepois} alt="botao para o próximo artigo" />
                </button>
            </div>
        </div>
    );
};
