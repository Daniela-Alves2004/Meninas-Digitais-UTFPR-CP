import React, { useState } from 'react';
import { CardArtigo } from '../CardArtigo';
import infosArtigos from './infosArtigos';
import { BotaoVoltarProximo } from '../../Micro/BotaoVoltarProximo';

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

            <BotaoVoltarProximo btAnterior={btAnterior} btDepois={btDepois} />
        </div>
    );
};
