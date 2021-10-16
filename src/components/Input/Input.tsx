import styled from "styled-components";

const Input = ({ action, event, placeholder }: any) => {
  return (
    <StyledInput
      type="text"
      onChange={event}
      onKeyPress={action}
      placeholder={placeholder}
      name="crypto"
    />
  );
};

const StyledInput = styled.input`
  border: 2px solid black;
  border-radius: 7px;
  padding: 25px 25px;
  box-shadow: -4px 8px 41px -2px rgba(0, 0, 0, 0.1);

  text-align: center;
  font-weight: bold;
  font-size: 18px;

  ::placeholder {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }
`;

export default Input;
