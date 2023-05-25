import Styled from "./styles";

const Button = ({ handleClick, styles, children }) => {
  return <Styled.Button {...{ onClick: handleClick, styles }}>{children}</Styled.Button>;
};

export default Button;
