import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("toggle read more and show less", () => {
  render(<App />);

  const readMore = screen.getByText("...read more");
  expect(readMore).toBeInTheDocument();

  userEvent.click(readMore);

  const showLess = screen.getByText("show less");
  expect(showLess).toBeInTheDocument();
});
