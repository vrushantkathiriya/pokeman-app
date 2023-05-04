import React from "react";
import "./Moves.css";
import { Link } from "react-router-dom";
import icon1 from "../images/Vector (2).png";
import icon2 from "../images/Vector (3).png";
// import bulbasaur from "../images/bulbasaur 1.png";
import move from '../images/move 1.png'

const MoveCard = ({moveCard, index}) => {
  return (
    <Link className="card" key={index} to={`/moves/movedetail`}>
      <h6 className="cardid">#001</h6>
      <div className="cardbody">
        <div className="card_left">
          <h2 className="card_title">{moveCard.name}</h2>
          <div>
            <button className="grass">
              <img src={icon1} />
            </button>
            <button className="circle">
              <img src={icon2} />
            </button>
          </div>
        </div>
        <div className="card_img">
          <img src={move} className="bulbasaur" />
        </div>
      </div>
    </Link>
  );
};

export default MoveCard;
