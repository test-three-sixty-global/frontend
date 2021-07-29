import React from "react";
import Loader from "react-loader-spinner";

export const Spinner = (props) => (
  <Loader
    type="Puff"
    color="#00BFFF"
    height={props.height}
    width={props.width}
    className="text-center mt-5  px-2 d-inline"
  />
);
