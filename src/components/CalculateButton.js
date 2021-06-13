import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #333333;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 15px 10px -15px #111;
  text-transform: uppercase;
  padding: 0.5rem;
  margin: 2rem 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #080808;
  }
`;

const CalculateButton = () => {
  return <StyledButton>Calculate</StyledButton>;
};

export default CalculateButton;
