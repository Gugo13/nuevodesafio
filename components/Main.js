import React from "react";
import Card from "./Card";
import Hero from "./Hero";

const Main = () => (
  <div>
    <section>
      <Hero></Hero>
    </section>
    <section className="cards-section">
      <div className="cards">
        <Card title="Card 1" content="Esto es el contenido de la card"></Card>
        <Card title="Card 2" content="Esto es el contenido de la card"></Card>
        <Card title="Card 3" content="Esto es el contenido de la card"></Card>
      </div>
    </section>
    <style jsx>{`
      .cards {
        display: flex;
        gap: 2rem;
        justify-content: center;
      }
    `}</style>
  </div>
);

export default Main;
