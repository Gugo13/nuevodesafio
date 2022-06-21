import React from "react";

const Card = (props) => (
  <div className="card">
    <div className="imagen"></div>
    <h3 className="card-title">{props.title}</h3>
    <p className="card-content">{props.content}</p>
    <style jsx>{`
      .imagen {
        background-image: url("https://picsum.photos/id/1/200/300");
        background-size: cover;
        background-position: center;
        height: 200px;
        width: 100%;
        border-radius: 10px;
      }

      .card {
        background-color: lightgray;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .card-title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .card-content {
        font-size: 1em;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default Card;
