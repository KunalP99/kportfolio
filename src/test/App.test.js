import { render, screen } from "@testing-library/react";
import App from "../App";

test("kportfolio should be rendered correctly", () => {
  render(<App />);
  const text = screen.getByText("kportfolio");
  expect(text).toBeInTheDocument;
});
