import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItemById } from "./pokemonSlice";

const ItemDetail = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const { selectedItem, loading, error } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(getItemById(itemId));
  }, [dispatch, itemId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error}</p>;
  }

  if (!selectedItem) {
    return null;
  }

  return (
    <div>
      <h1>{selectedItem.name}</h1>
      <p>{selectedItem.description}</p>
      <p>Description: {selectedItem.effect_entries[0].effect}</p>
      <p>Category: {selectedItem.category.name}</p>
      <p>Cost: {selectedItem.cost}</p>
    
    </div>
  );
};

export default ItemDetail;
