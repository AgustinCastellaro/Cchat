import React, { useState } from 'react';
import styles from '../styles/registerForm.module.scss';

function RegisterForm() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!email && !password){
            console.log("email y password vacio");
        }else if(email && !password){
            console.log("password vacio");
        }else if(!email && password){
            console.log("email vacio");
        }else{ 
            auth.createUserWithEmailAndPassword(email, password)
            .then((userRegister) => console.log(userRegister))
            .catch((error) => (console.log(error)))
        }
    }
    
    return (
        <div className={styles.loginForm}>
            <h1>Cchat</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Nombre" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Apellido" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Correo electrónico" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                 <button>Registrarse</button>
            </form>
            <hr />
            <div className={styles.signup}>
                <p>¿Ya tienes una cuenta?</p>
                <a href="#">Inicia sesión</a>
            </div>
        </div>
    )
}

export default LoginForm
