import React from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./style/hero.css";

function Hero() {
  return (
    <section className="hero_container">
      <div className="titles">
        <span>Bienvenidos a Restaurante Salvadoreño.</span>
        <br></br>
        <Link to="/fooddishes">
          <Button title="Ordena Aqui" />
        </Link>
      </div>
    </section>
  );
}
export { Hero };
