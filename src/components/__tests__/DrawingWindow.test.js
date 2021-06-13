import { render, screen } from "@testing-library/react";
import DrawingWindow from "../DrawingWindow";

test("should render DrawingWindow component", () => {
  render(<DrawingWindow />);
  const drawingWindowElement = screen.getByTestId("drawingWindow-1");
  expect(drawingWindowElement).toBeInTheDocument();
});
