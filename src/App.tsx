
import './App.css';
import { Header } from './Componentes/Macro/Header';
import { SobreMD } from './Componentes/Macro/SobreMD';
import DadosAcoes from "./Componentes/Macro/DadosAcoes";
import infos from "./infos"
function App() {
  return (
    <>
      <Header />
      <SobreMD />
      <h1><span>Confira as </span>Ações Realizadas</h1>
      <DadosAcoes  dados={infos} />
    </>
  );
}


export default App;
