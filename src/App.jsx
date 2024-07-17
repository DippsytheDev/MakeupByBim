import React from "react";

import { useState } from "react";
import ContactCard from "./Components/ContactCard/ContactCard";
import BookCard from "./Components/BookCard/BookCard";
import img1 from "/book1.jpg";

function App() {
  return (
    <div className="app-container">
      <ul className="container">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Bookings</li>
        <li>Contact</li>
      </ul>
      <div className="first">
        <div className="intro">
          {/* <p>CALGARY MAKEUP ARTIST</p> */}
          <h1>CALGARY</h1>
          <h1 className="makeup">MAKEUP</h1>
          <h1>ARTIST</h1>
        </div>
        <div className="main-img">
          <img src={img1} alt="" />
        </div>
        <div className="about-me">
          <h1>About Me</h1>
          <h1 className="unicode">&#9660;</h1>
          <p>
            Calgary Makeup Artist Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus quasi commodi voluptas amet dolores dolorem,
            rerum pariatur. Unde, neque laudantium reprehenderit id, corporis,
            cum quaerat nostrum ratione vel quibusdam consequuntur.
          </p>
        </div>
        <div className="services">
          <h1>SERVICES</h1>
          <h1 className="unicode">&#9660;</h1>
          <ul>
            <li>Bridal Makeup</li>
            <li>Group Makeup</li>
            <li>Events Makeup</li>
            <li>Theatre Makeup</li>
            <li>Theatre Makeup</li>
            <li>Theatre Makeup</li>
          </ul>
        </div>
        <div className="image-grid">
          <img src={img1} alt="" />
        </div>
        <div className="clients">
          <h1>CLIENTS</h1>
          <h1 className="unicode">&#9660;</h1>
          <ul>
            <li>Ad Works</li>
            <li>Ad Works</li>
            <li>Ad Works</li>
            <li>Ad Works</li>
            <li>Ad Works</li>
            <li>Ad Works</li>
          </ul>
        </div>
        <div className="image-grids">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="bookCard__container">
        <BookCard />
      </div>
      <section className="third">
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img1} alt="" />
        </div>
      </section>
      <section className="fourth">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </section>
    </div>
  );
}

export default App;
