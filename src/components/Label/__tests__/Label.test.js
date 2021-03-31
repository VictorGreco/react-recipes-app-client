import React from "react";
import { render } from "@testing-library/react";

import Label from "..";

describe("<Label />", () => {
  it("renders the label component", () => {
    const { getByLabelText } = render(
      <Label htmlFor="email">
        Email
        <input type="text" id="email" />
      </Label>,
    );

    expect(getByLabelText(/email/i)).toBeInTheDocument();
  });
});
