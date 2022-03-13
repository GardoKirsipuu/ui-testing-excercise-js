import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("App renders", () => {
  mount(<App />);
  cy.get("#logo").contains("TODO RAKENDUS");
});
