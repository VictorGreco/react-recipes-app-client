import React from "react";
import { string } from "prop-types";
import cn from "classnames";

function Input({ additionalClasses, ...props }) {
  const classes = cn(
    "form-control",
    additionalClasses && additionalClasses.split(" "),
  );

  return <input className={classes} {...props} />;
}

Input.propTypes = {
  additionalClasses: string,
};

Input.defaultProps = {
  additionalClasses: null,
};

export default Input;
