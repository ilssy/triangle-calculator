import styled from "styled-components";

const StyledWindow = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  border: 1px solid gray;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 40px;

  /* background grid pattern */
  background: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0.1em, transparent 0.1em),
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0.1em, transparent 0.1em);
  background-size: 1em 1em;
`;

const DrawingWindow = ({ sideValueA, sideValueB, sideValueC, submitted }) => {
  const isValid = (sideA, sideB, sideC) => {
    if (sideA === "0" || sideB === "0" || sideC === "0") return false;
    return (
      sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA
    );
  };

  const isEquilateral = (sideA, sideB, sideC) => {
    return sideA === sideB && sideA === sideC;
  };

  const isIsosceles = (sideA, sideB, sideC) => {
    return sideA === sideB || sideA === sideC || sideB === sideC;
  };

  return (
    <StyledWindow data-testid="drawingWindow-1">
      {submitted &&
      isValid(sideValueA, sideValueB, sideValueC) &&
      isEquilateral(sideValueA, sideValueB, sideValueC) ? (
        <div>Triangle is equilateral</div>
      ) : submitted &&
        isValid(sideValueA, sideValueB, sideValueC) &&
        isIsosceles(sideValueA, sideValueB, sideValueC) ? (
        <div>Triangle is isosceles</div>
      ) : submitted && isValid(sideValueA, sideValueB, sideValueC) ? (
        <div>Triangle is scalene</div>
      ) : submitted ? (
        <div>Is not possible to calculate this kind of triangle</div>
      ) : null}
    </StyledWindow>
  );
};

export default DrawingWindow;
