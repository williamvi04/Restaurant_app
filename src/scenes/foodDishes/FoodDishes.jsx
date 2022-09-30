import React from "react";
import "./style/foodDishes.css";

import { Card } from "../../components/card/Card";

import pupusa from "./img/pupusas_2.jpg";
import carnita from "./img/carne.jpg";
import patitas from "./img/sopa.jpg";
import yuca from "./img/yuca.jpg"
import nuegados from "./img/nuegados.jpg"
import quesadilla from "./img/quesadilla.jpg";

function FoodDishes() {
  return (
    <section className="flex-container sections-container">
      <h1>De nuestra cocina a tu mesa..</h1>
      <div className="food-container">
        <Card
          name="Pupusas"
          ingredients="elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa."
          price="$1.25 C/U "
          image={pupusa}
        />

        <Card
          name="Carne Asada con casamiento"
          ingredients="Carne asada con casamiento ( es una combinacion de arroz y frijol)."
          price="$12 "
          image={carnita}
        />

        <Card
          name="Sopa de Patas"
          ingredients="se prepara con patas de res, yuca, mote, cilantro, perejil, cebolla, ajo, achiote, comino, orégano"
          price="$7.50 "
          image={patitas}
        />

<Card
          name="Yuca frita con chicharron."
          ingredients="trozos de yuca, hervida o frita, mezclada con col cruda y servida con trozos de piel de cerdo"
          price="$2.50 "
          image={yuca}
        />

<Card
          name="Nuegados "
          ingredients="on a base de masa de yuca, y generalmente pueden ser acompañadas del típico chilate"
          price="$0.75 "
          image={nuegados}
        />

        <Card
          name="Quesadilla Salvadorena"
          ingredients="postre dulce elaborado a partir de ingredientes como la leche, la harina y el queso. "
          price="$3.50 "
          image={quesadilla}
        />
      </div>
    </section>
  );
}

export { FoodDishes };
