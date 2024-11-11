import { useAuth } from '../../AuthContext';  
import Header from "../../components/header/Header"

const Home = () => {
  const { isLogged, login, logout } = useAuth();
  return (
    <div>
      <Header />
      {isLogged ? (
        <div>
          <h1>Olá, Test</h1>
          <p>Seja bem-vindo ao HealthSync!</p>
          <button onClick={logout}>Sair</button>
        </div>
      ) : (
        <div>
          <h1>Bem-vindo ao HealthSync!</h1>
          <p>Conecte-se com seu médico e tenha acesso a suas informações de saúde.</p>
          <button onClick={login}>Entrar</button>
        </div>
      )}

      <div className="home-container">
      </div>
    </div>
  );
};

export default Home;
