import jwtDecode from 'jwt-decode'
import { TOKEN } from '../../utils/constants';

// #############
// ## REDUCER ##
// #############

const initialState = () => {
  const token = sessionStorage.getItem(TOKEN);
  if (token) {
    return jwtDecode(token)
  } else {
    return {
      role: "guest"
    }
  }
}

export default (state = initialState(), action) => {
  switch (action.type) {
    case "SET_ROLE": // FOR CLEAR ROLE
      return {
        ...state,
        role: action.payload.role
      }

    case "SIGNIN":
      const token = action.payload.token
      const user = jwtDecode(token)
      sessionStorage.setItem(TOKEN, token)
      return {
        ...state,
        ...user
      }

    case "SIGNOUT":
      sessionStorage.removeItem(TOKEN)
      // sessionStorage.removeItem(CART)
      // sessionStorage.removeItem(RESERVING_DATE)
      return {
        role: "guest"
      }

    default:
      return state
  }
}

// ####################
// ## ACTION CREATOR ##
// ####################

export const actions = {
  setRole: (role = "guest") => {
    return {
      type: "SET_ROLE",
      payload: {
        role
      }
    }
  },
  signin: (token) => {
    return {
      type: "SIGNIN",
      payload: {
        token
      }
    }
  },
  signout: () => ({ type: "SIGNOUT" }),
}