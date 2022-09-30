import React from "react";
import "./style/article.css";


function Blog() {
  return (
    <section className="flex-container sections-container">
      <h2>Un poco mas de historia.... a tu sabor </h2>
      <h4>Las Pupusas</h4>
      <p> Aqui en nuestro Blog, podras estar al dia con las noticias o datos muy interesantes sobre nuestra cultura. para iniciar te dejamos este video sobre las pupusas.</p>
      <br></br>
      <div className="card-article">
        <div id="article"></div>
        <div className="imgarticle">
        <iframe width="450" height="315" src="https://www.youtube.com/embed/_YSX7aynwao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
        </div>
        <br />
      </div>
      
    </section>
  );
}

export { Blog };
