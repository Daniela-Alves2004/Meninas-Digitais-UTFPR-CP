import logo from "../../../assets/Header/logoMD.png";
import facebook from "../../../assets/Footer/facebook.png";
import instagram from "../../../assets/Footer/instagram.png";
import linkedin from "../../../assets/Footer/linkedIn.png";
import folhaDecoracao from "../../../assets/Footer/folhaDecoracao.png";

export const Footer = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <img className="w-16" src={logo} alt="Logo do projeto meninas digitais UTFPR-CP" />
                    <p>Empoderando meninas através da tecnologia e transformando o futuro com igualdade e inovação</p>
                </div>
                <div className="flex flex-col">
                    <p>Menu Principal</p>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/">Ações</a></li>
                        <li><a href="/">Artigos</a></li>
                        <li><a href="/">Membros da equipe</a></li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p>Onde nos encontrar?</p>
                    <p>Av. Alberto Carazzai, 1640 - Centro, Cornélio Procópio - PR, 86300-000
                        UTFPR-CP</p>
                </div>
                <div className="flex flex-col">
                    <p>Informações</p>
                    <p>Contato</p>
                    <p>meninasdigitaisutfprcp@gmail.com</p>
                </div>
                <div className="flex flex-col">
                    <p>Redes Sociais</p>
                    <ul className="flex flex-row">
                        <li><img src={facebook} alt="Logo do facebook" /></li>
                        <li><img src={instagram} alt="Logo do instagram" /></li>
                        <li><img src={linkedin} alt="Logo do linkedin" /></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row">
                <p>Todos os direitos reservados</p>
                <img className="w-16" src={folhaDecoracao} alt="Folha de decoração" />
            </div>
        </div>
    );
};
