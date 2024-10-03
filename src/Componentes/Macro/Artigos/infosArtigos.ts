import {v4 as uuidv4} from 'uuid';
import artigoSBC from "../../../assets/Artigos/artigoSBC.png";

const infosArtigos = {
    artigoSBC:[
        {
            id: uuidv4(),
            tituloArtigo: "Meninas Digitais UTFPR-CP: incentivando meninas a conquistarem seu espaço  na área de computação e STEM",
            textoArtigo: "Este artigo contém um relato das ações promovidas pelo projeto de extensão Meninas Digitais UTFPR-CP, sendo esse um projeto parceiro do Programa Meninas Digitais, da SBC. O projeto, criado dentro da Universidade Tecnológica Federal do Paraná, Campus Cornélio Procópio, tem como objetivo aumentar a participação de meninas e mulheres em computação e STEM, incentivando e auxiliando meninas do ensino fundamental e médio de escolas públicas das cidades de Cornélio Procópio e região, no interior do Paraná, a conquistarem seu espaço nessas áreas. Para isso, o projeto promove ações como oficinas de programação, mentorias e rodas de conversa, incluindo nessas ações a resolução de desafios dos Objetivos de Desenvolvimento Sustentável (ODS).",
            imagemArtigo:  artigoSBC,
            altArtigo: "Imagem da pagina 1 do artigo publicado na revista SBC",
            revistaArtigo: "Revista Horizontes",
            IssnArtigo:"ISSN: 2175-9235",
        },
    ],
    // Adicionar os novos artigos aqui
    //o artigo teste é para ver se o código do botao está funcionando
    artigoTeste:[
        {
            id: uuidv4(),
            tituloArtigo: "titulo teste",
            textoArtigo: "texto teste",
            imagemArtigo:  artigoSBC,
            altArtigo: "teste",
            revistaArtigo: "Revista teste",
            IssnArtigo:"ISSN: teste",  
        },
    ],
}
export default infosArtigos;