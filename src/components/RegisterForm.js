import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import styles from '../styles/registerForm.module.scss';

function RegisterForm() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!name || !email || !password){
            console.log("Debe rellenar todos los campos");
        }else{
            auth.createUserWithEmailAndPassword(email, password)
            .then((userRegister) => console.log(userRegister))
            .catch((error) => (console.log(error)))

            auth.onAuthStateChanged(function(user){
                if(user){
                    user.updateProfile({
                        displayName: name,
                        photoURL: "userDefault.png"
                    });
                    console.log(user);
                }
            });

            history.push('/');
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}  
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
            <div className={styles.sign}>
                <p>¿Ya tienes una cuenta?</p>
                <Link to="/login" classname={styles.link}>Iniciar sesión</Link>
            </div>
        </div>
    )
}

export default RegisterForm
