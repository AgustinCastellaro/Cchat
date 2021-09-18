import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import styles from '../styles/loginForm.module.scss';

function LoginForm() {
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
            auth.signInWithEmailAndPassword(email, password)
            .then((userLogin) => console.log(userLogin))
            .catch((error) => (console.log(error)))
        }
    }
    
    return (
        <div className={styles.loginForm}>
            <h1>Cchat</h1>
            <form onSubmit={onSubmit}>
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
                 <button>Iniciar sesión</button>
            </form>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <hr />
            <div className={styles.sign}>
                <p>O Registrate aquí</p>
                <Link to="/register" classname={styles.link}>Registrarse</Link>
            </div>
        </div>
    )
}

export default LoginForm
