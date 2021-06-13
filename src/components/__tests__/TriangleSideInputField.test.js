import { render, screen } from "@testing-library/react";
import TriangleSideInputField from "../TriangleSideInputField";

test("should render TriangleSideInputField component with sideLetter A", () => {
  const sides = ["A", "B", "C"];
  render(<TriangleSideInputField sideLetter={sides[0]} />);
  const triangleSideInputFieldElement = screen.getByTestId("sideInputField-A");
  expect(triangleSideInputFieldElement).toBeInTheDocument();
});
