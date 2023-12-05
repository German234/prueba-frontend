// UserInfoPage.js
import React from 'react';
import Navbar from '../Navbar/Navbar'; // Asume que tienes un componente Navbar separado
import Sidebar from '../Sidebar/Sidebar'; // Asume que tienes un componente Sidebar separado
import './User.css'; // Asume que tienes un archivo CSS separado para UserInfoPage

const UserInfoPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Información personal */}
      <div className="user-info-container">
        <div className="personal-info">
          <div className="info-row">
            <div>Nombres: John</div>
            <div>Apellidos: Doe</div>
            <div>DUI: 123456789</div>
          </div>
          <div className="info-row">
            <div>Tipo de Sangre: O+</div>
            <div>ID Paciente: 98765</div>
            <div>Fecha de Nacimiento: 01/01/1990</div>
            <div>Ultimo Pesaje: 70 kg</div>
          </div>
        </div>

        {/* Barra de navegación y cuadricula */}
        <div className="dashboard">
          <Sidebar />
          <div className="grid-container">
            {/* Contenido de los cuadros en la cuadrícula */}
            <div className="grid-item">Datos Generales</div>
            <div className="grid-item">Recetas</div>
            <div className="grid-item">Historial Médico</div>
            <div className="grid-item">Medicinas</div>
            <div className="grid-item">Antecedentes</div>
            <div className="grid-item">Contactos Doctor</div>
            <div className="grid-item">Calendario</div>
            <div className="grid-item">Recordatorios</div>
            <div className="grid-item">Configuraciones</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;