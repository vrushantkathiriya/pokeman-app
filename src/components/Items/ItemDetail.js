import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItemById } from "./pokemonSlice";
import moonicon from '../images/moon.png'
import sunicon from '../images/sun.png'
import "./itemDetail.css";

const ItemDetail = () => {
  const [darkmode, setDarkmode] = useState(false);
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const { pokemonItems, loading, error } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(getItemById(itemId));
  }, [dispatch, itemId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  const selectedItem = pokemonItems.find((item) => item.id === parseInt(itemId));

  if (!selectedItem) {
    return null;
  }

  return (
    <div>
      <div className={`Item-List-Container ${darkmode ? "header_darkmode_active" : ""}`}>
        <div className={`header ${darkmode ? "header_darkmode_active" : ""}`}>
          Items
          <button onClick={() => setDarkmode(!darkmode)}>
            {darkmode ? <div><img src={moonicon} /></div> : <div><img src={sunicon} /></div>}
          </button>
        </div>
      </div>
      <div className={`item-detail-main ${darkmode ? "item_detail_dark" : ""}`}>
        <div className="row">
          <div className="left-col">
            <img src={selectedItem.sprites.default} alt={selectedItem.name} />
          </div>
          <div className="right-col">
            <div className="description">
                <h1 className="heding">Description</h1>
                <p>{selectedItem.effect_entries[0].effect}</p>
            </div>
            <div className="info">
              <h2>Info</h2>
              <p>Category: {selectedItem.category.name}</p>
              <p>Cost: {selectedItem.cost}</p>
              <p>Attributes:</p>
              <ul>
                {selectedItem.attributes.map((attribute) => (
                  <li key={attribute.name}>{attribute.name}</li>
                ))}
              </ul>
              <p>Held By:</p>
              <ul>
                {selectedItem.held_by_pokemon.map((pokemon) => (
                  <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
