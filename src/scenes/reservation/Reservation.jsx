import React, { useState } from "react";


import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";


import "./style/reservation.css";
import illustration from "./img/reservas.jpg";
import Swal from "sweetalert2";


import { Button } from "../../components/button/Button";
import { ButtonDanger } from "../../components/button/ButtonDanger";

function Reservation() {
  

  const valueForm = {
    name: "",
    Reservationdate: "",
    numberpeople: "",
  };

  const [values, setValues] = useState(valueForm);

  const valueData = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "reservations"), { values });
    console.log(values);
    Swal.fire(
      "Reservación Hecha " +
        `${values.name}` +
        " te esperamos el día " +
        `${values.Reservationdate}`
    );
  };

  return (
    <section className="flex-container sections-container">
      <h1>Para tu comodidad haz tu reservacion.</h1>
      
      <div className="reservation-container">
      <img src={illustration} alt="loading" />
       
        <form className="reservation-form" onSubmit={saveData}>
          <label> Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            onChange={valueData}
            required
          />
          <label>Fecha de reservacion:</label>
          <input type="date" name="Reservationdate" onChange={valueData} required />
          <label>Número de personas a reservar:</label>
          <input
            type="number"
            name="numberpeople"
            onChange={valueData}
            required
          />
          <Button title="Reservar" />
          <ButtonDanger title="Cancelar" />
        </form>
        </div>
      
    </section>
  );
 
}

export { Reservation };
