import React from "react";
// import "../styles/component.css";
const HelloWorldComponent = (props) => {

  console.log(props)

  return <> <h4>My name is {props.userDetails.name}</h4>
    <h4>My batch is {props.userDetails.batch}</h4>
    <h4>My roll is {props.userDetails.roll}</h4>
    <h4>And I am a {props.type}</h4>
  </>;
};

export default HelloWorldComponent;
