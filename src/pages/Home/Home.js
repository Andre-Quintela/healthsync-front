import { useAuth } from '../../AuthContext';  
import Header from "../../components/header/Header"
import './Home.css';
import { useNavigate } from 'react-router-dom';
import AgendarConsulta from '../../assets/AgendarConsulta.svg';
import VerificarConsultas from '../../assets/VerificarConsultas.svg';
import Exames from '../../assets/Exames.svg';

const Home = () => {
  const { isLogged, user } = useAuth();  
  const navigate = useNavigate(); 

  return (
    <div>
      <Header />
      <div className="home-container">
        {isLogged ? (
          <div>
            <div className="home-cards">

              <div className="card" onClick={(e) =>{
                e.preventDefault();
                navigate('/Consultas');
              }}>
                <h3>Marcar consultas</h3>
                <img src={AgendarConsulta} alt='Imagem de marcar consultas'/>
                <p>Marque suas consultas com facilidade</p>
              </div>

              <div className="card" onClick={(e)=>{
                e.preventDefault();
                navigate('/ConsultasAgendadas');
              }}>
                <h3>Verificar consultas agendadas</h3>
                <img src={VerificarConsultas} alt='Imagem de verificar consultas'/>
                <p>Verifique suas consultas agendadas de forma simples</p>
              </div>

              <div className="card" onClick={(e) =>{
                e.preventDefault();
                navigate('/Exames');
              }}>
                <h3>Exames</h3>
                <img src={Exames} alt='Imagem de exames'/>
                <p>Receba seus exames de forma rápida</p>
              </div>
            </div>
          </div>
        ) : (
          <div className='notLoggedModal'>
            <h1>Bem-vindo ao <span>HealthSync</span>!</h1>
            <p>Opss, parece que você ainda não está logado. Clique no botão abaixo para efetuar o login</p>
            <button onClick={(e) => {
              e.preventDefault();
              navigate('/SignIn');
            }}>Entrar</button>
          </div>
        )}
        </div>
    </div>
  );
};

export default Home;
