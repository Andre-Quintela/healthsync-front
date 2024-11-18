import { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';
import NotLoggedModal from '../../components/notLoggedModal/NotLoggedModal';
import './MarcarConsultas.css';
import ConsultaModel from '../../Models/Consulta/ConsultaModel';
import { useNavigate } from 'react-router-dom';


const MarcarConsultas = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    medicoNome: '',
    data: '',
    hora: '',
  });
  const { isLogged, user } = useAuth();
  const navigate = useNavigate(); 

  async function fetchDoctors() {
    try {
      const response = await fetch('https://localhost:7203/api/Medico');
      if (response.ok) {
        const data = await response.json();
        setDoctors(data.map((medico) => medico.name));
      } else {
        console.error('Erro ao buscar dados da API');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição', error);
    }
  }

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log('Form hora:', formData.hora);

    const newConsulta = new ConsultaModel(
      0,
      user.firstName,
      formData.medicoNome,
      new Date(formData.data).toISOString(),
      formData.hora
    );
    console.log('Dados enviados:', JSON.stringify(newConsulta, null, 2));
    console.log('Data:', newConsulta.data);

    try {
      const response = await fetch('https://localhost:7203/api/Consultas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConsulta),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Erro no backend:', errorDetails);
        alert(errorDetails.message || 'Erro desconhecido.');
      }

      if (response.ok) {
        alert('Consulta marcada com sucesso!');
        navigate('/')
      } else if (response.status === 409) {
        const error = await response.json();
        alert(error.message || 'Conflito ao marcar a consulta.');
      } else {
        alert('Erro ao marcar a consulta. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro no servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="mc-container">
      {isLogged ? (
        <div>
          <h1 className="mc-H1">Marcar Consulta</h1>
          <form className="mc-form" onSubmit={submitForm}>
            <div>
              <label className="mc-label">Nome do Paciente:</label>
              <input
                className="mc-input"
                type="text"
                required
                readOnly
                value={`${user.firstName} ${user.lastName}`}
              />
            </div>
            <div>
              <label className="mc-label">Nome do Médico:</label>
              <select
                className="mc-input"
                name="medicoNome"
                required
                value={formData.medico_nome}
                onChange={handleChange}
              >
                <option value="">Selecione um médico</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mc-label">Data da Consulta:</label>
              <input
                className="mc-input"
                type="date"
                name="data"
                required
                value={formData.data}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="mc-label">Hora da Consulta:</label>
              <input
                className="mc-input"
                type="time"
                name="hora"
                required
                value={formData.hora}
                onChange={handleChange}
              />
            </div>
            <button className="mc-button" type="submit">
              Marcar Consulta
            </button>
          </form>
        </div>
      ) : (
        <NotLoggedModal />
      )}
    </div>
  );
};

export default MarcarConsultas;
