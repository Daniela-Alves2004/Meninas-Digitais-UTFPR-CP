//define o tipo das propriedades do componente ContainerMembro
interface ContainerMembroProps {
    id: string;
    imagemMembro: string;
    altMembro: string;
    nomeMembro: string;
    setorMembro: string;
    descMembro: string;
}
//estrutura do componente ContainerMembro
export const ContainerMembro = ({ imagemMembro, altMembro, nomeMembro, setorMembro, descMembro }: ContainerMembroProps) => {
    return (
        <div>
            <img src={imagemMembro} alt={nomeMembro} />
            <h2>{nomeMembro}</h2>
            <p>{setorMembro}</p>
            <p>{descMembro}</p>
        </div>
    );
};