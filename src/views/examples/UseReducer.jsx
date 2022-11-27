import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store"

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuásrio</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_x7" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_/25" })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_parse" })}
          >
            int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_addN", payload: 10 })}
          >
            N
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
