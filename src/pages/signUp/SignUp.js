import './SignUp.css';
import FlaskAlt from '../../assets/Flask_alt.svg';

const SignUp = () => {
    return (
        <div className="container">
        <div className="info-section">
            <div className="info">
                <img src={FlaskAlt}></img>
                <div>
                    <h3>Marque suas consultas</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
            <div className="info">
                <img src={FlaskAlt}></img>
                <div>
                    <h3>Receba seus exames</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
            <div className="info">
                <img src={FlaskAlt}></img>
                <div>
                    <h3>Facilite sua saúde</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
        </div>
        <div className="form-section">
            <h2>Registre-se no<br></br><span>HealthSync</span></h2>
            <form>
                <input type="text" placeholder="Primeiro nome" required />
                <input type="text" placeholder="Sobrenome" required />
                <input type="date" placeholder="Data de nascimento" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Número de telefone" required />
                <input type="text" placeholder="Endereço" required />
                <div className="checkbox">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                        Eu aceito todos os <a href="#">Termos de condições</a> e <a href="#">Politicas de privacidade</a> do aplicativo HealthSync.
                    </label>
                </div>
                <button type="submit">Registre-se</button>
            </form>
        </div>
    </div>
    );
};

export default SignUp;
