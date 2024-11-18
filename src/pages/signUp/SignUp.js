import './SignUp.css';
import FlaskAlt from '../../assets/Flask_alt.svg';
import DeskAlt from '../../assets/Desk_alt_light.svg';
import ChartAlt from '../../assets/Chart_alt.svg';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import UserModel from '../../Models/User/UserModel';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        bornDate: '',
        email: '',
        password: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!document.getElementById('terms').checked) {
            console.log('Terms not accepted');
            return;
        }

        console.log('Terms accepted');

        const newUser = new UserModel(
            0,
            formData.firstName,
            formData.lastName,
            new Date(formData.bornDate).toISOString(),
            formData.email,
            formData.password,
            formData.address
        );

        try {
            const response = await fetch('https://localhost:7203/api/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                alert('Usuário registrado com sucesso!');
                navigate('/signin'); // Redireciona para a página de login
            } else if (response.status === 409) {
                const error = await response.json();
                alert(error.message || 'O e-mail já está em uso.');
            } else {
                alert('Erro ao registrar usuário. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro no envio:', error);
            console.log(JSON.stringify(newUser));
            alert('Erro no servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="container">
            <div className="info-section">
                <div className="info">
                    <img src={DeskAlt} alt="Icone de um frasco" />
                    <div>
                        <h3>Marque suas consultas</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
                <div className="info">
                    <img src={FlaskAlt} alt="Icone de um laboratório" />
                    <div>
                        <h3>Receba seus exames</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
                <div className="info">
                    <img src={ChartAlt} alt="Icone de um gráfico" />
                    <div>
                        <h3>Facilite sua saúde</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </div>
            <div className="form-section">
                <h2>
                    Registre-se no<br />
                    <span>HealthSync</span>
                </h2>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Primeiro nome"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Sobrenome"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="bornDate"
                        placeholder="Data de nascimento"
                        required
                        value={formData.bornDate}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Endereço"
                        required
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <div className="checkbox">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            Eu aceito todos os <Link to="/Test">Termos de condições</Link> e{' '}
                            <a href="#">Políticas de privacidade</a> do aplicativo HealthSync.
                        </label>
                    </div>
                    <button type="submit">Registre-se</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
