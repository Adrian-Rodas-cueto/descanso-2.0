
import './App.css';
import './css/fontello.css';

function App() {
    return (
        <div className='App '>
            <header className='mb-5'>
                <div className='layout-horizontal'>
                    <nav className='main-navbar' >
                        <div className='container '>
                            <div className='row justify-content-start'>
                                {/* menu */}
                                <div className='dropdown col  '>
                                    <button className='btn btn-primary dropdown-toggle me-1' type="button" id="dropdownMenuButtonIcon" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className='bi bi-error-circle me-50'></i> menu
                                    </button>
                                    <div className='dropdown-menu px-2 py-2' aria-labelledby="dropdownMenuButtonIcon">
                                        <htmlForm className='px-2 py-2'>
                                            <label >Tiempo restante</label>
                                            <input className='form-control' type="text" name="tiempo" id="tiempo_disponible" value="1:30" readOnly />
                                            <br></br>
                                            <label >Tiempo a solicitar</label>
                                            <input className='form-control' type="number" name="tiemposolicitado" id="tiempo_solicitado" placeholder="maximo 30min/minimo 15min" />
                                            <br></br>
                                            <button type="submit" className='btn btn-primary'>Solicitar</button>
                                            <div className='admin ' id="admin">
                                                <br></br>
                                                <label >cantidad de personas que pueden descansar</label>
                                                <input className='form-control' type="number" name="numero" />
                                                <br></br>
                                                <button type="submit" className='btn btn-primary'>Actualizar</button>
                                            </div>
                                        </htmlForm>
                                    </div>
                                </div>
                                {/* opciones para iniciar sesion */}
                                <div className=' dropdown col-1'>
                                    <button type="button" className='btn btn-primary dropdown-toggle me-1 icon-user' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    </button>
                                    <div className='dropdown-menu px-2 py-2' >
                                        <htmlForm className='px-2 py-2'>
                                            <div className='form-group'>
                                                <label htmlFor="exampleDropdownFormEmail1">User</label>
                                                <input type="text" className='form-control' id="exampleDropdownFormEmail1" placeholder="User" />
                                            </div>
                                            <div className='form-group'>
                                                <br></br>
                                                <label htmlFor="exampleDropdownFormPassword1">Password</label>
                                                <input type="password" className='form-control' id="exampleDropdownFormPassword1" placeholder="Password" />
                                            </div>
                                            <div className='form-group'>
                                                <br></br>
                                                <div className='checkbox'>
                                                    <input type="checkbox" className='checkbox-input' id="dropdownCheck1" />
                                                    <label for="dropdownCheck1">Remember me</label>
                                                </div>
                                            </div>
                                            <br></br>
                                            <button type="submit" className='btn btn-primary'>Sign in</button>
                                        </htmlForm>
                                        <div className='dropdown-divider'></div>
                                        <a className='dropdown-item' href="/singup/index.html">New around here? Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* mostrar el estado q se encuentra el usuario */}
            <section className=' row justify-content-md-center'>
                <div className='row justify-content-md-center '  >
                    <img src="/movil.png" className='col  shadow-2-strong ' alt="movil" style={{ maxWidth: '20rem' }} />
                    <p className='text col' >hola mundo</p>
                </div>
                {/* <div className='fondo_marco shadow-2-strong' style={{ maxWidth: '40rem' }} ></div> */}
            </section>
        </div>
    );
}

export default App;
