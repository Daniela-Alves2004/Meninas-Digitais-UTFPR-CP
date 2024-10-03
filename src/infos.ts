import {v4 as uuidv4} from 'uuid';
import meninasLab from "../src/assets/AcoesRealizadas/meninasLab.png"
import technovation from "../src/assets/AcoesRealizadas/technovation.png"
import computerBeach from "../src/assets/AcoesRealizadas/computerBeach.png"
import feiraTrabalhador from "../src/assets/AcoesRealizadas/feiraTrabalhador.png"
import rodaConversa from "../src/assets/AcoesRealizadas/rodaConversa.png"
import reuniaoColmeia from "../src/assets/AcoesRealizadas/reuniaoColmeia.png" 
import visitaEtec from "../src/assets/AcoesRealizadas/visitaEtec.png"
//adicionair o espaço para os outros eventos realizados
//Mudei algumas fotos devido a qualidade
const infos =[
    {
        id: uuidv4(),
        foto:meninasLab,
        alt:"foto de uma oficina meninas lab", 
        texto: "A primeira oficina ofertada pelo projeto foi o ‘Meninas no Lab’, abriu as portas do Campus para alunas do ensino fundamental e médio de escolas públicas, introduzindo-as aos conceitos de design e programação através da plataforma Thunkable.",
    },
    {
        id: uuidv4(),
        foto:technovation,
        alt: "foto de uma oficina technovation",
        texto:"O projeto participa anualmente da competição global Technovation Girls, que desafia jovens garotas a criarem soluções tecnológicas para problemas reais. Em nosso primeiro ano, visitamos escolas públicas de Cornélio Procópio e região, com o apoio essencial de professoras que incentivaram 20 alunas a formarem 5 equipes."

    },
    {
        id: uuidv4(),
        foto:feiraTrabalhador,
        alt:"foto da equipe na feira do trabalhador",
        texto:"No dia 1º de maio, a prefeitura de Cornélio Procópio promoveu a Feira do Trabalhador, um evento voltado para a comunidade local e regional. O projeto Meninas Digitais UTFPR-CP marcou presença ao lado de outros projetos do Campus, divulgando nossas ações de extensão para a comunidade."

    },
    {
        id: uuidv4(),
        foto:computerBeach,
        alt:"foto da equipe no evento computer one the beach",
        texto: "Em abril, com o apoio do Departamento de Computação da UTFPR-CP, 13 integrantes do projeto participaram do evento científico Computer on the Beach em Balneário Camboriú. No dia 11,  ocorreu um workshop sobre ciência de dados. Já no dia 12, o encontro regional do sul dos projetos parceiros do Programa Meninas Digitais, sendo extremamente enriquecedor e proporcionando uma valiosa troca de experiências com outros projetos.",

    },
    {
        id: uuidv4(),
        foto:rodaConversa,
        alt:"foto de uma roda de conversa",
        texto:"Em março, organizamos uma roda de conversa para debater, de forma informal, a vivência das alunas na universidade e criar uma rede de apoio. Durante o encontro, elas compartilharam experiências e reconheceram desafios comuns. Em junho de 2024, realizamos outra roda de conversa, em parceria com o Diretório Acadêmico (DAELT), onde discutimos como cada uma se sente no ambiente acadêmico e profissional, além de abordar as dificuldades enfrentadas ao ingressar na área, como as visões machistas da família e da sociedade."
    },
    {
        id: uuidv4(),
        foto:reuniaoColmeia,
        alt:"foto de uma reunião da colmeia",
        texto:"Criar texto para essa ação"
    },
    {
        id: uuidv4(),
        foto:reuniaoColmeia,
        alt:"foto de uma reunião da colmeia",
        texto:"Criar texto para essa ação"
    },
    {
        id: uuidv4(),
        foto:visitaEtec,
        alt:"foto no evento de visita a ETEC",
        texto:"Criar texto para essa ação"
    }
];
export default infos;