import { NoOrderContainer, NoOrderText } from "./styles";

function NoOrder({ children }) {
  return (
    <NoOrderContainer>
      <NoOrderText>{children}</NoOrderText>
    </NoOrderContainer>
  );
}

export default NoOrder;
