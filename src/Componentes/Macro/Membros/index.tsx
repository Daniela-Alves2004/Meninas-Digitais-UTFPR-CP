import { useState } from "react";
import infosMembros from "./infosMembros";
import { ContainerMembro } from "../ContainerMembros";
import { BotaoVoltarProximo } from "../../Micro/BotaoVoltarProximo";

export const Membros = () => {
    //logica para exibir os membros da equipe
    const [membroAtual, setMembroAtual] = useState<number>(0);

    const btAnterior = () => {
        setMembroAtual((prev) =>
            prev > 0 ? prev - 4 : infosMembros.length - 4
        );
    };

    const btDepois = () => {
        setMembroAtual((prev) =>
            prev < infosMembros.length - 4 ? prev + 4 : 0
        );
    };

    const membrosParaExibir = infosMembros.slice(membroAtual, membroAtual + 4);

    return (
        <div id="membros-equipe">
            <h1><span>Conheça os</span> Membros da Equipe</h1>

            <div className="flex flex-row">
                {membrosParaExibir.map(membro => (
                    <ContainerMembro
                        id={membro.id}
                        imagemMembro={membro.imagemMembro}
                        altMembro={membro.altMembro}
                        nomeMembro={membro.nomeMembro}
                        setorMembro={membro.setorMembro}
                        descMembro={membro.descMembro}
                    />
                ))}
            </div>

            <BotaoVoltarProximo btAnterior={btAnterior} btDepois={btDepois} />
        </div>
    );
};
