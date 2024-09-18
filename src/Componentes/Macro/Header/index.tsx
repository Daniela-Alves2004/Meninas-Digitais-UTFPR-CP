import iconLua from "../../../assets/Header/iconLua.png";
import logoMD from "../../../assets/Header/logoMD.png";
import iconFechar from "../../../assets/Header/iconFechar.png";
import iconMenu from "../../../assets/Header/iconMenu.png";
import { useState } from "react";
import "./style.css";

export const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <>
            <div className="HeaderMobile">
                <header className="flex flex-row justify-between items-center bg-primaria ">
                    <img className="w-10" src={logoMD} alt="Logo do projeto de extensão Meninas Digitais UTFPR-CP" />
                    <div className="space-x-10 ">
                        <button onClick={toggleMenu}>
                            {menuAberto ? <img src={iconFechar} alt="Ícone de fechar menubar" /> : <img src={iconMenu} alt="Ícone de menubar" />}
                        </button>
                        {menuAberto && (
                            <nav>
                                <ul className="flex flex-col absolute top-20 right-10 bg-white p-4 shadow-lg">
                                    <li><a href="/">Início</a></li>
                                    <li><a href="/">Ações</a></li>
                                    <li><a href="/">Artigos</a></li>
                                    <li><a href="/">Membros da equipe</a></li>
                                </ul>
                            </nav>
                        )}
                        <button aria-label="Ativar modo noturno">
                            <img src={iconLua} alt="Ícone de lua representando o modo noturno" />
                        </button>
                    </div>
                </header>
            </div>

            <div className="HeaderDesktop">
                <header className="flex flex-row justify-between items-center bg-background">
                    <img className="w-85 ml-7" src={logoMD} alt="Logo do projeto de extensão Meninas Digitais UTFPR-CP" />
                    <nav>
                        <ul className="flex flex-row space-x-4 text-texto mr-6 justify-between">
                            <li><a href="/">Início</a></li>
                            <li><a href="/">Ações</a></li>
                            <li><a href="/">Artigos</a></li>
                            <li><a href="/">Membros da equipe</a></li>
                            <img src={iconLua} alt="Ícone de lua representando o modo noturno" />
                        </ul>
                        
                    </nav>
                </header>
            </div>
        </>
    );
};

/* Lembra de atribuir referencia ao 
 ariefstudio flaticon no icone de fechar
 e 
  Ilham Fitrotul Hayat icone menubar*/
