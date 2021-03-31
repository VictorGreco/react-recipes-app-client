import React from "react";
import { number } from "prop-types";
import cn from "classnames";

import "./Serves.scss";

function Serves({ serves }) {
  const classes = cn("Serves");

  return (
    <div className={classes}>
      <h4 className="Serves__Subtitle text-uppercase text-muted">Personas</h4>
      <div className="Serves__Items">
        <p className="Serves__Value text-muted">{serves}</p>
      </div>
    </div>
  );
}

Serves.propTypes = {
  serves: number.isRequired,
};

export default Serves;
