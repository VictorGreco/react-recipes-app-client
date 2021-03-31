import React from "react";
import { string } from "prop-types";
import cn from "classnames";

function TextArea({ additionalClasses = "", ...props }) {
  const classes = cn(
    "form-control",
    additionalClasses && additionalClasses.split(" "),
  );

  return <textarea className={classes} {...props} />;
}

TextArea.propTypes = {
  additionalClasses: string,
};

TextArea.defaultProps = {
  additionalClasses: null,
};

export default TextArea;
