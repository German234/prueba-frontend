// SignUpDoc.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpimgdoc from '../../images/doc.png';
import './signUp_Doc.css';
import { registerUser } from '../../services/auth.services';

const SignUpDoc = () => {
    const navigate = useNavigate();

    const initialForm = {
        Name: '',
        LastName: '',
        dui: '',
        CreMed: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    };

    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await registerUser(formData);

            if (response[0] === 201) {
                navigate('/login');
            } else {
                console.log('Usuario ya existe');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signup-doc">
            <div className="form-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombres"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Apellidos"
                            name="LastName"
                            value={formData.LastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="DUI (Número de Documento)"
                            name="dui"
                            value={formData.dui}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Credencial Médica"
                            name="CreMed"
                            value={formData.CreMed}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Número de Teléfono"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirmar Contraseña"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Link to="/doc">
                        <button type="submit">Registrarse</button>
                    </Link>
                    <p className="login-link">
                        ¿Ya tienes una cuenta? <Link to="/logindoc">Inicia sesión aquí</Link>
                    </p>
                </form>
            </div>
            <div className="image-container">
                <img src={SignUpimgdoc} alt="Descripción de la imagen" />
            </div>
        </div>
    );
};

export default SignUpDoc;
