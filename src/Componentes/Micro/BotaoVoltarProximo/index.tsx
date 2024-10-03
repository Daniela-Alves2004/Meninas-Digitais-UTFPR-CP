import botaoAnterior from '../../../assets/Artigos/botaoAnterior.png';
import botaoDepois from '../../../assets/Artigos/botaoDepois.png';
export const BotaoVoltarProximo = ({ btAnterior, btDepois }: { btAnterior: () => void, btDepois: () => void }) => {
    //botões para voltar e ir para o próximo artigo
    return (
        <div className='flex flex-row justify-center'>
            <button onClick={btAnterior}>
                <img src={botaoAnterior} alt="botao para artigo anterior" />
            </button>
            <button onClick={btDepois}>
                <img src={botaoDepois} alt="botao para o próximo artigo" />
            </button>
        </div>);
};