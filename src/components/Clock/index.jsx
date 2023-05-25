import { useTime } from "../../hooks/useTime";
import Format from "../Format";
import Styled from "./styles";

const Clock = () => {
  const [{ hours, minutes, seconds }] = useTime();

  return (
    <Styled.Container>
      <p>
        <Format value={hours} />:<Format value={minutes} />:
        <Format value={seconds} />
      </p>
    </Styled.Container>
  );
};

export default Clock;
