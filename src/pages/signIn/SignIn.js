import './SignIn.css';
import FlaskAlt from '../../assets/Flask_alt.svg';
import DeskAlt from '../../assets/Desk_alt_light.svg';
import ChartAlt from '../../assets/Chart_alt.svg';

const SignIn = () => {
  return (
    <div className="container">
      <div className="info-section">
        <div className="info">
          <img src={DeskAlt} alt='Icone de um frasco'></img>
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
          <img src={ChartAlt}></img>
          <div>
            <h3>Facilite sua saúde</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
      </div>
      <div className="form-section">
        <h2>Registre-se no<br></br><span>HealthSync</span></h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <p>Ainda não tem uma conta? <a href="#">Registre-se</a></p>
      </div>
    </div>
  )
}

export default SignIn