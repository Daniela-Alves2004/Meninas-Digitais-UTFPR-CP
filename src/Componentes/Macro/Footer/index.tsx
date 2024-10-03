import logo from "../../../assets/Header/logoMD.png";
import facebook from "../../../assets/Footer/facebook.png";
import instagram from "../../../assets/Footer/instagram.png";
import linkedin from "../../../assets/Footer/linkedIn.png";
import folhaDecoracao from "../../../assets/Footer/folhaDecoracao.png";

export const Footer = () => {
    //função para rolar a página até o id do elemento
    const scrollToPage = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth",
            });
        }
    };
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
                        <li><a href="#inicio" onClick={(e) => scrollToPage(e, 'inicio')}>Início</a></li>
                        <li><a href="#acoes" onClick={(e) => scrollToPage(e, 'acoes')}>Ações</a></li>
                        <li><a href="#artigos" onClick={(e) => scrollToPage(e, 'artigos')} >Artigos</a></li>
                        <li><a href="#membros-equipe" onClick={(e) => scrollToPage(e, 'membros-equipe')}>Membros da equipe</a></li>
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
                        <li><a target="black" href="https://www.facebook.com/profile.php?id=61552155907224&locale=pt_BR"><img src={facebook} alt="Logo do facebook"  /></a></li>
                        <li><a target="black" href="https://www.instagram.com/meninasdigitaisutfprcp/"><img src={instagram} alt="Logo do instagram" /></a></li>
                        <li><a target="black" href="https://www.linkedin.com/company/meninas-digitais-utfpr-cp/?viewAsMember=true"><img src={linkedin} alt="Logo do linkedin" /></a></li>
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
