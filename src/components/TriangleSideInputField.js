import styled from "styled-components";

const Label = styled.label`
  font-size: 12px;
  color: gray;
  display: inline-block;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;
const SideTextOnInput = styled.div`
  position: relative;

  ${Label} {
    position: absolute;
    top: -10px;
    left: 25px;
    padding: 2px;
    z-index: 1;
    &:after {
      content: " ";
      background-color: #fff;
      width: 100%;
      height: 13px;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
    }
  }
`;
const Input = styled.input`
  margin: 0 0 0.5rem 0.5rem;
  padding: 5px;
  width: 40%;
  border-radius: 5px;
  border: 1px solid silver;
`;

const TriangleSideInputField = (props) => {
  const { sideLetter, name, type, value, onChange } = props;
  return (
    <SideTextOnInput>
      <Label
        htmlFor="sideInputValue"
        data-testid={`sideInputField-${sideLetter}`}
      >
        {sideLetter} side
      </Label>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder="5"
      />
    </SideTextOnInput>
  );
};

export default TriangleSideInputField;
