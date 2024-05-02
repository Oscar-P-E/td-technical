import { useState } from "react";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(2);

  const handleCardClick = (cardId: number) => {
    setActiveCard(cardId);
  };

  return (
    <div className="cards-container">
      <div className="cards">
        <div
          className={`card ${activeCard === 1 ? "active" : ""}`}
          onClick={() => handleCardClick(1)}
        >
          <img
            className="card-image"
            src="/img/brisbane_vgpzva.jpg"
            alt="Brisbane"
          />
          <div className="card-content">
            <div>
              <h3 className="card-heading">Heading 1</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <button className="card-button">Button 1</button>
          </div>
        </div>
        <div
          className={`card ${activeCard === 2 ? "active" : ""}`}
          onClick={() => handleCardClick(2)}
        >
          <img
            className="card-image"
            src="/img/brisbane_vgpzva.jpg"
            alt="Brisbane"
          />
          <div className="card-content">
            <div>
              <h3 className="card-heading">Heading 2</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <button className="card-button">Button 2</button>
          </div>
        </div>
        <div
          className={`card ${activeCard === 3 ? "active" : ""}`}
          onClick={() => handleCardClick(3)}
        >
          <img
            className="card-image"
            src="/img/brisbane_vgpzva.jpg"
            alt="Brisbane"
          />
          <div className="card-content">
            <div>
              <h3 className="card-heading">Heading 3</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <p className="card-text">
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <button className="card-button">Button 3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
