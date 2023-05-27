import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  RESET,
} from "./actions/types.js";
const initialState = { myFavorites: [], allCharacters: [] };

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      const filterFavorites = state.allCharacters.filter(
        (character) => character.id !== payload
      );
      return {
        ...state,
        //ojo con poner [filterFavorites]
        myFavorites: filterFavorites,
        allCharacters: filterFavorites,
      };

    case FILTER_CARDS:
      const filterAllCharacters = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: filterAllCharacters,
      };

    case ORDER_CARDS:
      const favoritesSort = state.allCharacters.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: favoritesSort,
      };

    case RESET:
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };

    default:
      return state;
  }
}
