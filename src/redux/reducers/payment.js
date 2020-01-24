// import jwtDecode from 'jwt-decode'
import { CART } from '../../utils/constants';
import { RESERVING_DATE } from '../../utils/constants';

// #############
// ## REDUCER ##
// #############

const initialState = () => {
  let state = {
    startDate: null,
    endDate: null
  }
  const cart = sessionStorage.getItem(CART);
  // const reservingDate = sessionStorage.getItem(RESERVING_DATE);
  if (cart) {
    return {
      ...state,
      cart
    }
  } else {
    return {
      ...state,
      cart: []
    }
  }
}

export default (state = initialState(), action) => {
  switch (action.type) {
    case "SET_CART":
      sessionStorage.setItem(CART, JSON.stringify(action.payload.cart));
      return {
        ...state,
        cart: action.payload.cart
      }
    
    case "SET_RESERVING_DATE":
      sessionStorage.setItem(RESERVING_DATE, JSON.stringify(action.payload));
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

// ####################
// ## ACTION CREATOR ##
// ####################

export const actions = {
  setCart: (cart = []) => {
    return {
      type: "SET_CART",
      payload: {
        cart
      }
    }
  },
  setReservingDate: (dateObj = { startDate: null, endDate: null }) => {
    return {
      type: "SET_RESERVING_DATE",
      payload: {
        ...dateObj
      }
    }
  }
}