import "./style.css";
interface IBotaoProps {
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    className: string;
  }
  
  export const Botao = ({ label, onClick,className, type = "button" }: IBotaoProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={className}
      >
        {label}
      </button>
    );
  };
  
  export default Botao;
  