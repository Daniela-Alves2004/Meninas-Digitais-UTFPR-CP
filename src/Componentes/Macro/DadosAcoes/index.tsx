import ContainerAcoes from "../ContainerAcoes"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import folhaEsquerda from "../../../assets/AcoesRealizadas/folhaDecoracaoEsquerda.png";
import folhaDireita from "../../../assets/AcoesRealizadas/folhaDecoracaoDireita.png";
//define os tipos de propriedades do componente DadosAcoes
interface Acao {
  id: string;
  foto: string;
  alt: string;
  texto: string;
}

interface IdadosAcoes {
  dados: Acao[];
}

export default function DadosAcoes({ dados }: IdadosAcoes) {
  //define algumas configurações do slider- por exemplo velocidade, quantidade de slides a serem mostrados, etc
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <div id="acoes">
      <img src={folhaEsquerda} alt="Folha de decoracao lateral" />
      <Slider {...settings}>

        {dados.map(acao => <ContainerAcoes
          key={acao.id}
          foto={acao.foto}
          alt={acao.alt}
          texto={acao.texto}

        />)
        }
      </Slider>
      <img src={folhaDireita} alt="Folha de decoracao lateral" />
    </div>
  )
}