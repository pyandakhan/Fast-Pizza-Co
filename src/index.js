import React, { StrictMode } from "react";
import ReaceDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function MenuItems() {
  return (
    <>
      <p>Ek bar khaoge bar bar aoge!</p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaobj={pizza} key={pizza.name} />
        ))}
      </ul>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzaCount = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaCount > 0 ? (
        <MenuItems />
      ) : (
        <p>Still working on menu! Thanks for your patience :)</p>
      )}
    </main>
  );
}

function Opening({ closeTime }) {
  return (
    <div className="order">
      <p>
        We are currently Open! Till {closeTime}:00. Come visit us or order.
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function IsOpen({ openTime, closeTime }) {
  return (
    <p>
      Come back later b/w {openTime}:00 - {closeTime}:00 :)
    </p>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openTime = "00";
  const closeTime = "12";
  const isOpen = hour >= openTime && hour <= closeTime;

  return (
    <footer className="footer">
      {isOpen ? (
        <Opening closeTime={closeTime} />
      ) : (
        <IsOpen openTime={openTime} closeTime={closeTime} />
      )}
    </footer>
  );
}

function Pizza({ pizzaobj }) {
  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} rel={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.price}</span>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.soldOut}</span>
      </div>
    </li>
  );
}

const root = ReaceDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
