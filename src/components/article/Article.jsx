import React from "react";
import axios from "axios";



function Article() {
  const API_URL = "https://jsonplaceholder.typicode.com/posts/1";
  axios
    .get(API_URL)
    .then(
      ({ data }) =>
        (document.getElementById("article").innerHTML = `<ul>
       
        </ul>`)
    )
    .catch("Error 404 page not found");
  return (
    <>
      <div className="card-article">
        <div id="article"></div>
        <div className="imgarticle">
          <img src={cooking} alt="loading" />
         
        </div>
        <br />
      </div>
    </>
  );
}

export { Article };
