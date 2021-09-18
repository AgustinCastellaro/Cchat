import React, { useState } from 'react';
import { auth } from '../firebase';
import styles from '../styles/myProfile.module.scss';
import { Link } from 'react-router-dom';

function MyProfile(){
    const [name, setName] = useState(auth.currentUser.displayName);
    const [email, setEmail] = useState(auth.currentUser.email);
    const [file, setFile] = useState(null);
    console.log(auth.currentUser);

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(name)
        console.log(email)

        if(!name || !email){
            console.log("Debe rellenar todos los campos");
        }else{
            console.log(file)
            
            /* Codigo de subida de imagen a carpeta user */

            /* auth.onAuthStateChanged(function(user){
                if(user){
                    user.updateProfile({
                        displayName: name,
                        email: email
                    });
                    console.log(user);
                }
            }); */
        }
    }

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className={styles.myProfile}>
            <form onSubmit={onSubmit}>
                <div className={styles.data}>
                    <div className={styles.image}>
                        <img 
                            src={
                                (file) 
                                ? file 
                                : process.env.PUBLIC_URL + "/img/user/" + auth.currentUser.photoURL
                            } 
                            alt=""
                        />
                        <div className={styles.uploadImage}>
                            <input type="file" onChange={(e) => handleChange(e)} />
                            <button>Subir imagen</button>
                        </div>
                    </div>
                    <div className={styles.personalInformation}>
                        <p className={styles.title}>Informacion personal</p>
                        <div className={styles.input}>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Ingresa tu nombre" 
                                value={auth.currentUser.displayName} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                            <label htmlFor="name" className={styles.inputTitle}>Nombre</label>
                        </div>
                        <div className={styles.input}>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Ingresa tu correo electronico"
                                value={auth.currentUser.email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email" className={styles.inputTitle}>Email</label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.buttons}>
                    <button className={styles.save}>Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default MyProfile
