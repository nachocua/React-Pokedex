import "./App.css";
import Boton from "../Boton";
import Panel from "../Panel";
import Input from "../Input";

export default function App() {
   return (
      <div className="App">
         {/**
         <Panel>
            <Input label="Username" />
            <Input label="Password" />
            <div class="layout-horizontal">
               <Boton>Ingresar</Boton>
               <Boton tipo="secundario">????</Boton>
            </div>
         </Panel>
   */}
         <Input label="Username" />
      </div>
   );
}
