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

const DrawingWindow = () => {
  return (
    <StyledWindow data-testid="drawingWindow-1">
      Equilateral Triangle
    </StyledWindow>
  );
};

export default DrawingWindow;
