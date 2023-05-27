import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  RESET,
} from "./types.js";

export function addFav(character) {
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}

export function filterCards(gender) {
  return {
    type: FILTER_CARDS,
    payload: gender,
  };
}

export function orderCards(orden) {
  return {
    type: ORDER_CARDS,
    payload: orden,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
