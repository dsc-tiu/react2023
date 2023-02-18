import React, { useEffect, useState } from "react";

export const Functional = (props) => {
  const [state, setState] = useState({
    name: props.data.name,
    batch: props.data.batch,
    roll: props.data.roll,
    count: props.data.count,
  });
  const IncrementCount = () => {
    setState({ ...state, count: state.count + 1 });
  };

  useEffect(() => {
    console.log("functional component mounted");
    return () => {
      console.log("functional component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("functional component updated");
  }, [state.count]);
  return (
    <div>
      <h1>My Name is {state.name}</h1>
      <p>
        Roll No. is {state.roll} of
        {state.batch}. <span>With Count of {state.count}</span>
      </p>
      <button type="button" onClick={IncrementCount}>
        Increment Count
      </button>
    </div>
  );
};
