import { Link } from "react-router-dom";
import logo from '../assets/logos/logo.png';
import '../css/navegacion.css'

const Navegacion = () => {

    return (
        <header>
            <div class="navbar1">
                <a href="index.html" class="mx-auto">
                    <img class="logo" src={ logo } alt="Logo María José Núñez" />
                </a>
                <div class="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person-circle usuario dropdown-toggle"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="./pages/login.html">Iniciar Sesión</a>
                        </li>
                        <li>
                            <button class="dropdown-item" id="cerrarSesionBtn" onclick="cerrarSesion()">
                                Cerrar 
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <nav class="navbar-expand-lg">
                <Link to="/">Home</Link>
                <Link to="/registro">Registrarse</Link>
                <Link to="/alumnos">Alumnos</Link>
            </nav>
        </header>
    )
};

export default Navegacion;