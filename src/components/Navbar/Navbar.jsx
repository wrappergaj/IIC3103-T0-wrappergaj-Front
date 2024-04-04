import React from "react";
import { Link } from "react-router-dom";
import { populateData } from "../../Solicitudes/populate";
import { resetData } from "../../Solicitudes/reset";
import './Navbar.css'

function Navbar() {
    const handlePopulateData = async () => {
        try {
            await populateData();
            alert('Datos poblados exitosamente!');
        } catch (error) {
            alert('Error al poblar los datos. Consulte la consola para más detalles.');
        }
    };

    const handleResetData = async () => {
        try {
            await resetData();
            alert('Datos restablecidos exitosamente!');
        } catch (error) {
            alert('Error al restablecer los datos. Consulte la consola para más detalles.');
        }
    };

    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <button className="navbar-button" onClick={handlePopulateData}> Poblar </button>
                    </li>
                    <li>
                        <button className="navbar-button" onClick={handleResetData}> Reset </button>
                    </li>
                    <li>
                        <Link to="/create-user">
                            <button className="navbar-button"> Crear Usuario </button>
                        </Link>  
                    </li>
                    <li>
                        <Link to="/create-post">
                            <button className="navbar-button"> Crear Publicación </button>
                        </Link>  
                    </li>
                    <li>
                        <Link to="/">
                            <button className="navbar-button"> Inicio </button>
                        </Link>  
                    </li>
                    <li>
                        <p className="welcome"> ¡Bienvenido! </p>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
