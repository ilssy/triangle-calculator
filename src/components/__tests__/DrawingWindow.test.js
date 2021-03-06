import { render, screen, cleanup } from "@testing-library/react";
import DrawingWindow from "../DrawingWindow";

afterEach(() => {
  cleanup();
});

test("should render DrawingWindow component", () => {
  render(<DrawingWindow />);
  const drawingWindowElement = screen.getByTestId("drawingWindow-1");
  expect(drawingWindowElement).toBeInTheDocument();
});

test("should render DrawingWindow component with text 'Triangle is equilateral'", () => {
  const sides = { sideA: 5, sideB: 5, sideC: 5 };
  render(
    <DrawingWindow
      sideValueA={sides.sideA}
      sideValueB={sides.sideB}
      sideValueC={sides.sideC}
      submitted={true}
    />
  );
  const drawingWindowElement = screen.getByTestId("drawingWindow-1");
  expect(drawingWindowElement).toBeInTheDocument();
  expect(drawingWindowElement).toHaveTextContent("Triangle is equilateral");
});

test("should render DrawingWindow component with text 'Triangle is isosceles'", () => {
  const sides = { sideA: 5, sideB: 5, sideC: 1 };
  render(
    <DrawingWindow
      sideValueA={sides.sideA}
      sideValueB={sides.sideB}
      sideValueC={sides.sideC}
      submitted={true}
    />
  );
  const drawingWindowElement = screen.getByTestId("drawingWindow-1");
  expect(drawingWindowElement).toBeInTheDocument();
  expect(drawingWindowElement).toHaveTextContent("Triangle is isosceles");
});

test("should render DrawingWindow component with text 'Triangle is scalene'", () => {
  const sides = { sideA: 5, sideB: 4, sideC: 3 };
  render(
    <DrawingWindow
      sideValueA={sides.sideA}
      sideValueB={sides.sideB}
      sideValueC={sides.sideC}
      submitted={true}
    />
  );
  const drawingWindowElement = screen.getByTestId("drawingWindow-1");
  expect(drawingWindowElement).toBeInTheDocument();
  expect(drawingWindowElement).toHaveTextContent("Triangle is scalene");
});

test("should render DrawingWindow component with text 'Is not possible to calculate this kind of triangle'", () => {
  const sides = { sideA: 5, sideB: 5, sideC: 0 };
  render(
    <DrawingWindow
      sideValueA={sides.sideA}
      sideValueB={sides.sideB}
      sideValueC={sides.sideC}
      submitted={true}
    />
  );
  const drawingWindowElement = screen.getByTestId("drawingWindow-1");
  expect(drawingWindowElement).toBeInTheDocument();
  expect(drawingWindowElement).toHaveTextContent(
    "Is not possible to calculate this kind of triangle"
  );
});
