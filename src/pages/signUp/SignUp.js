import './SignUp.css';
import FlaskAlt from '../../assets/Flask_alt.svg';

const SignUp = () => {
    return (
        <div className='container'>
            <div className='info-section'> 
                <div className='info'>
                    <img src={FlaskAlt} alt='Flask Icon'/>
                    <div>
                        <h3>Agende consulstas de forma fácil</h3>        
                        <p>Agende consultas de forma rápido e fácil</p>
                    </div>
                </div>

                <div className='info'>
                    <img src={FlaskAlt} alt='Flask Icon'/>
                    <div>
                        <h3>Agende consulstas de forma fácil</h3>
                        <p>Agende consultas de forma rápido e fácil</p>
                    </div>
                </div>

                <div className='info'>
                    <img src={FlaskAlt} alt='Flask Icon'/>
                    <div>
                        <h3>Agende consulstas de forma fácil</h3>
                        <p>Agende consultas de forma rápido e fácil</p>
                    </div>
                </div>
            </div>

            <div className='form-section'>
                <form>
                    <h2>Registre-se no<br></br><span>HealthSync</span></h2>
                    <div>
                        <input type='text' placeholder='Primeiro nome' />
                        <input type='text' placeholder='Último nome' />
                    </div>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Senha' />
                    <input type='password' placeholder='Confirme sua senha' />
                    <button>Registre-se</button>
                </form>
            </div>
        </div>   
    );
};

export default SignUp;
