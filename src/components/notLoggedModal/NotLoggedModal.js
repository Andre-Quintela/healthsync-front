import './NotLoggedModal.css';
import { useNavigate } from 'react-router-dom';

const NotLoggedModal = () => {
    const navigate = useNavigate(); 
    return (    
        <div className='notLoggedModal'>
            <h1>Bem-vindo ao <span>HealthSync</span>!</h1>
            <p>Opss, parece que você ainda não está logado. Clique no botão abaixo para efetuar o login</p>
            <button onClick={(e) => {
                e.preventDefault();
                navigate('/SignIn');
            }}>Entrar</button>
        </div>
    )
}

export default NotLoggedModal;