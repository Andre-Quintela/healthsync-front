import './ConsultasAgendadas.css';

const ConsultasAgendadas = () => {
  const appointments = [
    {
      patient: "João Silva",
      doctor: "Dr. Silva",
      date: "2024-11-20",
      time: "14:00",
    },
    {
      patient: "Maria Oliveira",
      doctor: "Dra. Souza",
      date: "2024-11-22",
      time: "10:30",
    },
    {
      patient: "Carlos Almeida",
      doctor: "Dr. Oliveira",
      date: "2024-11-23",
      time: "16:00",
    },
  ];

  return (
    <div className="ca-container">
      <h1 className='.ca-title'>Consultas Marcadas</h1>
      <div className="ca-list">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div key={index} className="ca-card">
              <div className="ca-info">
                <h3>{appointment.patient}</h3>
                <p><strong>Médico:</strong> {appointment.doctor}</p>
                <p><strong>Data:</strong> {appointment.date}</p>
                <p><strong>Hora:</strong> {appointment.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="ca-no-appointments">Nenhuma consulta marcada.</p>
        )}
      </div>
    </div>
  );
};

export default ConsultasAgendadas;
