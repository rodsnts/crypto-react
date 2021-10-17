import styled from "styled-components";

interface Props {
  link: string;
  content: string;
}

const Button: React.FC<Props> = ({ link, content }: any) => {
  return (
    <StyledButton href={link} target="__blank">
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  display: block;
  background-color: black;
  box-shadow: -4px 8px 41px -2px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 25px 25px;
  border-radius: 7px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #292929;
  }
`;

export default Button;
