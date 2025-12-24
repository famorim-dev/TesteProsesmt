import { Route, Routes } from "react-router-dom";
import Consulta from "../pages/consulta/estado";
import Date from "../pages/consulta/dataTable";
import Paises from "../pages/consulta/paises";
import Formulario from "../pages/formulario/formulario";

function Rotas(){
    return(
        <Routes>
            <Route path="/" element={< Consulta/>}/>
            <Route path="/date" element={< Date/>}/>
            <Route path="/paises" element={< Paises/>}/>
            <Route path="/form" element={< Formulario/>}/>

            <Route path="*" element={< Consulta/>}/>
        </Routes>
    )
}

export default Rotas;