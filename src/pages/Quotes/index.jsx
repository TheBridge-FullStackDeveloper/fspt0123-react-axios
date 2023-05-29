import { useQuote } from "../../hooks";
import Styled from "./styles";

const Quotes = () => {
  const { image, quote } = useQuote();

  return (
    <Styled.Wrapper>
      <Styled.Image src={image} alt="" />
      <Styled.Quote>{quote}</Styled.Quote>
    </Styled.Wrapper>
  );
};

export default Quotes;
