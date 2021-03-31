import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "..";

describe("<Button />", () => {
  it("renders the Button with the default props", () => {
    const { getByText } = render(<Button>Save</Button>);

    const button = getByText("Save");

    expect(button).toHaveTextContent("Save");
    expect(button).toHaveProperty("type", "button");
    expect(button).toHaveClass("btn-primary");
  });

  it("forwards the ...props to the component", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Save</Button>);

    const button = getByText("Save");

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("assigns the passed in classes", () => {
    const { getByText } = render(
      <Button additionalClasses="padded spaced">Save</Button>,
    );

    const button = getByText("Save");

    expect(button).toHaveClass("padded");
    expect(button).toHaveClass("spaced");
  });

  it("assigns the button variant", () => {
    const { getByText } = render(<Button variant="secondary">Save</Button>);

    const button = getByText("Save");

    expect(button).toHaveClass("btn-secondary");
  });

  it("assigns the button html type", () => {
    const { getByText } = render(<Button htmlType="submit">Save</Button>);

    const button = getByText("Save");

    expect(button).toHaveProperty("type", "submit");
  });
});
