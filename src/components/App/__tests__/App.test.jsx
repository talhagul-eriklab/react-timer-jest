import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  it("should render the App component", () => {
    render(<App />);
    expect(screen.getByText("25:00")).toBeInTheDocument();
  });
});
