import "./index.css";
import Boton from "../../Components/Boton";
import Panel from "../../Components/Panel";
import Input from "../../Components/Input";

export default function Login() {
   return (
      <div className="App">
         <Panel>
            <Input label="Username" />
            <Input label="Password" />
            <div class="layout-horizontal">
               <Boton>Ingresar</Boton>
               <Boton tipo="secundario">????</Boton>
            </div>
         </Panel>
      </div>
   );
}
