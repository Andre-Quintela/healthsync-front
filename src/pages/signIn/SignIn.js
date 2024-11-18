import './SignIn.css';
import FlaskAlt from '../../assets/Flask_alt.svg';
import DeskAlt from '../../assets/Desk_alt_light.svg';
import ChartAlt from '../../assets/Chart_alt.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import UserModel from '../../Models/User/UserModel';

const SignIn = () => {
  const { isLogged, login, logout } = useAuth();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Chama o backend para verificar o usuário
    try {
      const response = await fetch(`https://localhost:7203/api/Users/${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();

        // Verifica se a senha corresponde
        if (userData.password === password) {
          // Login bem-sucedido
          login(new UserModel(userData.id, userData.firstName, userData.lastName, userData.bornDate, userData.email, userData.password, userData.address));
          console.log(isLogged.toString());
          navigate('/'); // Redireciona para a página inicial
        } else {
          alert('Senha incorreta.');
        }
      } else if (response.status === 404) {
        alert('Usuário não encontrado.');
      } else {
        alert('Erro ao tentar fazer login. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro no login:', error);
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
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <p>
          Não possui conta? <Link to="/SignUp">Registre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
