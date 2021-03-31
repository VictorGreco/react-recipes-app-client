import React from "react";
import { node, string } from "prop-types";
import cn from "classnames";

function Label({ children, htmlFor, additionalClasses = "", ...props }) {
  const classes = cn(
    "form-control-label",
    additionalClasses && additionalClasses.split(" "),
  );

  return (
    <label htmlFor={htmlFor} className={classes} {...props}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string.isRequired,
  additionalClasses: string,
};

Label.defaultProps = {
  additionalClasses: null,
};

export default Label;
