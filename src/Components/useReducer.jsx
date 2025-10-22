import { useReducer } from "react";

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState={
    count: 0

  });  
}         