import { THEME_OPTIONS, THEMES } from "../../constants";
import { useGetter } from "../../store";
import Button from "../Button";
import Styled from "./styles";

const List = () => {
  const { setTheme } = useGetter();

  return (
    <Styled.Wrapper>
      {THEME_OPTIONS.map((option, index) => {
        return (
          <Button key={index} handleClick={() => setTheme(option)} styles={THEMES[option]}>
            {option.toLowerCase()}
          </Button>
        );
      })}
    </Styled.Wrapper>
  );
};

export default List;
