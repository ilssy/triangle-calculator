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
  const isEquilateral = (sideA, sideB, sideC) => {
    return sideA === sideB && sideA === sideC;
  };

  const isIsosceles = (sideA, sideB, sideC) => {
    return sideA === sideB || sideA === sideC || sideB === sideC;
  };
  return (
    <StyledWindow data-testid="drawingWindow-1">
      {submitted && isEquilateral(sideValueA, sideValueB, sideValueC) ? (
        <div>Triangle is equilateral</div>
      ) : submitted && isIsosceles(sideValueA, sideValueB, sideValueC) ? (
        <div>Triangle is isosceles</div>
      ) : null}
    </StyledWindow>
  );
};

export default DrawingWindow;
