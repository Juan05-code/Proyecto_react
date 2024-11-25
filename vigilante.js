import React, { useState } from "react";

function Vigilant() {
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleArrivalChange = (e) => {
    setArrivalTime(e.target.value);
  };

  const handleDepartureChange = (e) => {
    setDepartureTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar hora de entrada
    const arrival = new Date(`1970-01-01T${arrivalTime}`);
    const sevenAM = new Date(`1970-01-01T07:00:00`);
    const sevenThirtyAM = new Date(`1970-01-01T07:30:00`);

    if (arrival < sevenAM || arrival > sevenThirtyAM) {
      setStatusMessage("Llegaste tarde o ingresaste en un horario no permitido.");
      return;
    }

    // Validar hora de salida
    const departure = departureTime
      ? new Date(`1970-01-01T${departureTime}`)
      : new Date(`1970-01-01T17:30:00`);
    const fiveThirtyPM = new Date(`1970-01-01T17:30:00`);

    if (departure < sevenAM || departure > fiveThirtyPM) {
      setStatusMessage(
        "La hora de salida debe ser entre las 7:00 am y las 5:30 pm."
      );
      return;
    }

    setStatusMessage("Registro exitoso. Buen trabajo hoy.");
  };

  return (
    <div className="form-container">
      <h1>Bienvenido, Vigilante</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="arrivalTime">Hora de entrada (7:00-7:30 am):</label>
          <input
            type="time"
            id="arrivalTime"
            value={arrivalTime}
            onChange={handleArrivalChange}
            required
          />
        </div>
        <div>
          <label htmlFor="departureTime">Hora de salida (máximo 5:30 pm):</label>
          <input
            type="time"
            id="departureTime"
            value={departureTime}
            onChange={handleDepartureChange}
          />
          <small>Déjalo vacío si sales exactamente a las 5:30 pm.</small>
        </div>
        <button type="submit">Registrar</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default Vigilant;
