import React from "react";
import { Button } from "../../src/components/ui/button";

describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button />);
  });
});
