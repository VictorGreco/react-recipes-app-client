import React from "react";
import { node, string } from "prop-types";
import cn from "classnames";

import "./SVGIcon.scss";

function SVGIcon({ children, additionalClasses }) {
  const classes = cn(
    "SVGIcon",
    additionalClasses && additionalClasses.split(" "),
  );

  return <div className={classes}>{children}</div>;
}

SVGIcon.propTypes = {
  children: node.isRequired,
  additionalClasses: string,
};

SVGIcon.defaultProps = {
  additionalClasses: null,
};

export default SVGIcon;
