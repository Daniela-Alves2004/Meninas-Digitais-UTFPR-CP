import ContainerAcoes from "../ContainerAcoes"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
interface Acao {
    id: string;
    foto: string;
    alt: string;
    texto: string;
  }
  
  interface IdadosAcoes {
    dados: Acao[];
  }

export default function DadosAcoes({dados}:IdadosAcoes) {
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
        <div className="" >
            <Slider {...settings}>
        
       
            {dados.map(acao => <ContainerAcoes
                key={acao.id}
                foto={acao.foto}
                alt={acao.alt}
                texto={acao.texto}

            />)
            }
    
        </Slider>
        </div>
    )
}