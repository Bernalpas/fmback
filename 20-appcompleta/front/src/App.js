
import { Routes, Route } from 'react-router-dom';
import Registro from './Pages/Registro.jsx';
import Alumnos from './Pages/Alumnos.jsx';
import Home from './Pages/Home/Home.jsx';
import Navegacion from './componentes/Navegacion.jsx';


const App = () => {

    return(

        <>
            <Navegacion />

            <Routes>
                <Route path="/" element= { <Home /> } />
                <Route path="/registro" element= { <Registro /> } />
                <Route path="/alumnos" element= { <Alumnos /> } />
            </Routes>     
        </>

    )
}

export default App;
