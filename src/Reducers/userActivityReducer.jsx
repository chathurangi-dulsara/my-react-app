import { useReducer } from "react";

export const Action = {
  SET_USER_INFO:"SET_USER_INFO",
}

export const userActivityReducer = (state, {type,data}) => {
  switch (type) {
    case Action.SET_USER_INFO:
      return {
        ...state,
       image: data.image,
       email: data.email,
       city: data.city,
       position: data.position,
      };
    default:
      return { ...state };
  }
};