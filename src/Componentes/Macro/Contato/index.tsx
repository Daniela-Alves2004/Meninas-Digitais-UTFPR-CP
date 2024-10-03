import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import fotoEquipe from "../../../assets/Contato/fotoEquipe.png";

export const Contato = () => {
    //logica usando email js para enviar as duvidas dos usuarios
    const formRef = useRef<HTMLFormElement>(null);

    const enviarEmail = (event: React.FormEvent) => {
        event.preventDefault();

        if (formRef.current) {
            console.log("Tentando enviar o formulário...");

            emailjs.sendForm('service_meninasdigitais', 'template_12xwp23', formRef.current, 'x-JxHHljklFeHzW0f')
                .then(() => {
                    alert("E-mail enviado com sucesso!");
                })
                .catch((error) => {
                    //se a mensagem não for enviada, exibe um alerta com o erro
                    alert("Erro ao enviar e-mail: " + error);
                });
        }
    };
    return (
        <div className='flex flex-row'>
            <div>
                <img src={fotoEquipe} alt="Foto da equipe do projeto Meninas Digitais" />
            </div>
            <div >
                <p><span>Contato</span> Consulte-nos em caso de dúvidas</p>
                <form className='flex flex-col' id='contact-form' ref={formRef} onSubmit={enviarEmail}>
                    <input type="email" name="emailUsuario" placeholder='Digite seu email' required />
                    <input type="text" name="mensagem" placeholder="Digite sua dúvida" required />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};
