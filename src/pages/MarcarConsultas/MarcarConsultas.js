import { useAuth } from '../../AuthContext';
import NotLoggedModal from '../../components/notLoggedModal/NotLoggedModal';
import './MarcarConsultas.css';

const MarcarConsultas = () => {
  const doctors = ["Dr. Silva", "Dra. Souza", "Dr. Oliveira"];
  const { isLogged, user } = useAuth();
  return (
    <div className="mc-container">
      {isLogged ? (
        <div>
          <h1 className='mc-H1'>Marcar Consulta</h1>
          <form className='mc-form'>
            <div>
              <label className='mc-label'>Nome do Paciente:</label>
              <input className='mc-input' type="text" required readOnly value={user.name + " " + user.lastName}/>
            </div>
            <div>
              <label className='mc-label'>Nome do Médico:</label>
              <select className='mc-input' required>
                <option value="">Selecione um médico</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>{doctor}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='mc-label'>Data da Consulta:</label>
              <input className='mc-input' type="date" required />
            </div>
            <div>
              <label className='mc-label'>Hora da Consulta:</label>
              <input className='mc-input' type="time" required />
            </div>
            <button className="mc-button" type="submit">Marcar Consulta</button>
          </form>
        </div>
      ) : (
        <NotLoggedModal />
      )}
    </div>
  )
}

export default MarcarConsultas