import { combineReducers } from "redux";

// Initial state
const Item = [
    {
      id: 1,
      name: "Sandal",
      value: 0
    },
    {
      id: 2,
      name: "Sepatu",
      value: 0
    }
  ]

const setItem = (state = Item, action) => {
  switch (action.type) {
    case "SET_VALUE":
      // return Object.assign({}, { color: action.color }, state);
      return { ...state.setItem,  value: action.value };
    case "SET_NAME":
      return { ...state.setItem,  name: action.name };
    default:
      return state;
  }
};

const addItem = (state = Item, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // return Object.assign({}, action.value, state);
      return state.push(action.value);
    default:
      return state;
  }
};

const kickItem = (state = Item, action) => {
  switch (action.type) {
    case "KICK_ITEM":
      state = [action.value];
      return state;
    default:
      return state;
  }
};

const getTotal = () => {
  let total = 0
  Item.map(i => 
    total += i.value
  )
  return total;
};

const getItem = () => (Item);

export default combineReducers({
  setItem,
  getItem,
  getTotal,
  addItem,
  kickItem
});
