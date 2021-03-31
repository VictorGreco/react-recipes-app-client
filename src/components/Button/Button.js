import React from "react";
import cn from "classnames";
import { string, node } from "prop-types";

function Button({
  children,
  additionalClasses = "",
  variant,
  htmlType,
  ...props
}) {
  const classes = cn(
    "btn",
    variant ? `btn-${variant}` : "btn-primary",
    additionalClasses && additionalClasses.split(" "),
  );

  return (
    <button
      className={classes}
      type={htmlType === "button" ? "button" : "submit"}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node.isRequired,
  additionalClasses: string,
  variant: string,
  htmlType: string,
};

Button.defaultProps = {
  additionalClasses: null,
  variant: "primary",
  htmlType: "button",
};

export default Button;
