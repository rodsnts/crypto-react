import styled from "styled-components";

const Input = ({ action, event }: any) => {
  return (
    <StyledInput
      type="text"
      onChange={event}
      onKeyPress={action}
      name="crypto"
    />
  );
};

const StyledInput = styled.input`
  border: 2px solid black;
  border-radius: 7px;
  padding: 25px 25px;
  box-shadow: -4px 8px 41px -2px rgba(0, 0, 0, 0.1);
`;

export default Input;
