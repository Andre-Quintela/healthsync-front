import React, { useEffect, useState } from "react";
import "./ConsultasAgendadas.css";
import Header from "../../components/header/Header"


const ConsultasAgendadas = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchAppointments = async () => {
      try {
        const response = await fetch("https://localhost:7203/api/Consultas");
        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);
        }
        const data = await response.json();
        // Processando os dados antes de salvar no estado
        const formattedAppointments = data.map((item) => ({
          patient: item.userName,
          doctor: item.medicoNome,
          date: new Date(item.data).toLocaleDateString("pt-BR"),
          time: item.hora,
        }));
        setAppointments(formattedAppointments);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="ca-container">
      <Header/>
      <h1 className="ca-title">Consultas Marcadas</h1>
      {isLoading ? (
        <p className="ca-loading">Carregando...</p>
      ) : error ? (
        <p className="ca-error">Erro: {error}</p>
      ) : appointments.length > 0 ? (
        <div className="ca-list">
          {appointments.map((appointment, index) => (
            <div key={index} className="ca-card">
              <div className="ca-info">
                <h3>{appointment.patient}</h3>
                <p><strong>Médico:</strong> {appointment.doctor}</p>
                <p><strong>Data:</strong> {appointment.date}</p>
                <p><strong>Hora:</strong> {appointment.time}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="ca-no-appointments">Nenhuma consulta marcada.</p>
      )}
    </div>
  );
};

export default ConsultasAgendadas;
