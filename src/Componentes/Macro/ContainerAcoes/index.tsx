interface IContainerAcoesProps {
    foto: string;
    alt: string;
    texto: string;
}
export default function ContainerAcoes({ foto, alt, texto }: IContainerAcoesProps) {
    return (
       
            <div>
                <img className="w-12" src={foto} alt={alt} />
                <p>{texto}</p>
            </div>
      
    );
}