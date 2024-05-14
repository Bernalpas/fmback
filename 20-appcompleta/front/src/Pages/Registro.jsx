import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import '../css/registro.css'

const Registro = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [provincia, setProvincia] = useState('');
    const [password, setPassword] = useState('');
    const [consulta, setConsulta] = useState('');

    const navigate = useNavigate();

    const URL = process.env.REACT_APP_POST;


    const obtener = (e) => {
        
        e.preventDefault();

        console.log(URL);

        console.log(nombre, apellido, email, telefono, provincia, password, consulta);

        alert('Datos enviados');

        limpiarDatos();

    }

    
    const limpiarDatos = () => {

        setNombre('');
        setApellido('');
        setEmail('');
        setTelefono('');
        setProvincia('');
        setPassword('');
        setConsulta('');

    }

    const obtenerDatos = async (e) => {

        e.preventDefault();

        const persona = {
            nombre,
            apellido,
            email,
            telefono,
            provincia,
            password,
            consulta
        }

        try {

            const response = await axios.post(URL, {
                nombre,
                apellido,
                email,
                telefono,
                provincia,
                password,
                consulta
            });

            if(response.status === 200){

                console.log('Usuario registrado');

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/');

            } else{
                console.log('Error al registrar usuario');
            }

            
        } catch (error) {
            console.log(error);
        }

        limpiarDatos();

    }

    

    return(
        <>
            <h1 className='mt-2 text-center'>Registro</h1>  

            <div class="container pt-40">
                <div class="d-flex flex-md-row row contact">
                    <div id="mapa">
                        <iframe title="Mapa de Ubicación" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13620.984117135802!2d-64.1715523!3d-31.4073469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a5c249b39d%3A0xba46e840b28b1e38!2zRXN0dWRpbyBkZSBEYW56YSBNYXLDrWEgSm9zw6kgTsO6w7Fleg!5e0!3m2!1ses-419!2sar!4v1701984134250!5m2!1ses-419!2sar" width="100%" height="100%" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade" alt="Mapa">
                        </iframe>
                    </div>

                    <div className='d-flex justify-content-between mt-3'>
                        <p class="edmjn">Estudio de Danza María José Núñez</p>
                        <p>Ibarbalz 1052, Barrio General Paz</p>
                        <p class="datos">Teléfono: <a href="tel: 3515329273">+54 9 351 532-9273</a></p>
                        <p class="datos">Email: <a href="mailto: estudiodanzamjn@gmail.com">estudiodanzamjn@gmail.com</a></p>
                    </div>

                    <div id="formulario">
                        <form onSubmit={obtenerDatos}>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label for="nombre" class="form-label">Nombre</label>
                                        <input   
                                            type="text" 
                                            class="form-control"
                                            placeholder="Ana"
                                            value={nombre} 
                                            onChange={(e) => setNombre(e.target.value)}
                                            required 
                                            />
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label for="apellido" class="form-label">Apellido</label>
                                        <input 
                                            id="apellido" 
                                            type="text" 
                                            class="form-control"
                                            placeholder="García" 
                                            value={apellido} 
                                            onChange={(e) => setApellido(e.target.value)}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input 
                                            id="email" 
                                            class="form-control" 
                                            type="email"
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="ana.garcia@example.com" required />
                                    </div>
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <div class="form-group">
                                        <label for="telefono" class="form-label">Teléfono</label>
                                        <input 
                                            id="telefono" 
                                            class="form-control" 
                                            type="text"
                                            value={telefono} 
                                            onChange={(e) => setTelefono(e.target.value)}
                                            placeholder="(351) 123-4567" 
                                            required />
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <div class="form-group">
                                        <label for="telefono" class="form-label">Provincia</label>
                                        <input 
                                            id="provincia" 
                                            class="form-control" 
                                            type="text" 
                                            value={provincia} 
                                            onChange={(e) => setProvincia(e.target.value)}
                                            placeholder="Ingrese su Provincia" 
                                            required />
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <div class="form-group">
                                        <label for="password" class="form-label">Password</label>
                                        <input 
                                            id="password" 
                                            class="form-control" 
                                            type="password" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Ingrese su Password" 
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="consulta" class="form-label">Consulta</label>
                                <textarea 
                                    id="consulta" 
                                    class="form-control" 
                                    rows="5"
                                    value={consulta} 
                                    onChange={(e) => setConsulta(e.target.value)}
                                    placeholder="Deje aquí su consulta y nos comunicaremos con usted lo más pronto posible."
                                    required>
                                </textarea>
                            </div>

                            <div className="form-group d-flex justify-content-around">
                                <input 
                                    type="submit"
                                    class="btn mt-2 bg-primary w-25" 
                                    id="enviarConsulta" 
                                    value="Enviar Consulta" 
                                    /* onClick={obtener} */
                                    />
                                <button type="reset" class="btn mt-2 bg-danger w-25">Borrar Datos</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
                
        </>
    )
}

export default Registro;