import jwtDecode from 'jwt-decode'

// #############
// ## REDUCER ##
// #############

const initialState = () => {
  const token = sessionStorage.getItem("ACCESS_TOKEN");
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
      sessionStorage.setItem("ACCESS_TOKEN", token)
      return {
        ...state,
        role: user.role
      }

    case "SIGNOUT":
      sessionStorage.removeItem("ACCESS_TOKEN")
      return {
        ...state,
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