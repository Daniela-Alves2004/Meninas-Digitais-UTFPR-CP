//define os tipos de propriedades do componente ContainerAcoes
interface IContainerAcoesProps {
    foto: string;
    alt: string;
    texto: string;
}
export default function ContainerAcoes({ foto, alt, texto }: IContainerAcoesProps) {
    return (
       //estrutura do componente ContainerAcoes
        <div className="flex flex-col">
            <img className="w-12" src={foto} alt={alt} />
            <p>{texto}</p>
        </div>
    );
}