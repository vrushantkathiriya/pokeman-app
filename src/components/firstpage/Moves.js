import React, { useState, useEffect } from "react";
import "./Moves.css";
import filter from "../images/filter.png";
import Filter from "./Filter";
import { allmoves } from "../../Redux/moveSlice";
import { useDispatch, useSelector } from "react-redux";
import MoveCard from "./MoveCard";

const Moves = () => {
  const { moves, isLoading, error } = useSelector((state) => state.moves);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allmoves());
  }, []);
  const [movesApi, setMovesApi] = useState([]);
  const [filterMoves, setFilterMoves] = useState("");
  const [showfilter, sethidefilter] = useState(false);

  return (
    <div>
      <div className="title moves_header" onClick={() => console.log("")}>
        <div
          className="count"
          onClick={() => {
            sethidefilter(!showfilter);
          }}
        >
          <img src={filter} />
          <span className="filter_count">2</span>
        </div>
        <p>Pokedex</p>
        <div>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
      <div className="search_container">
        <div className="search_moves">
          <div className="searchmoves_inner">
            <input
              type="text"
              onChange={(e) => setFilterMoves(e.target.value)}
              placeholder="Search Moves"/>
            <button>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="context">
          {moves &&
            moves.length > 0 &&
            moves
              .filter((item) => {
                return filterMoves.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(filterMoves);
              })
              .map((Pokedex, index) => (
                <MoveCard key={index} moveCard={Pokedex} />
              ))}
        </div>
        {showfilter ? <Filter /> : ""}

        {/* 
           showfilter? <Filter />:""
        {/* <div >
              <div className={`team ${darkmode ? "team_darkmode_active" : ""}`} onClick={() => console.log('icon')}>
                <span>
                  <h6>#001</h6>
                    <p className='text-1'>{Pokedex.name}</p>
                </span>
                    <img src={bulbasaur} className='bulbasaur' />
              </div>
            </div> */}
      </div>
    </div>
  );
};
export default Moves;
