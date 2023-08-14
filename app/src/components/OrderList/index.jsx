import { OrderListContainer, OrderText, TrashIcon } from "./styles";
import trashIcon from "../../assets/img/trashIcon.png";

function OrderList({ order, deleteOrder }) {
  function handleDeleteOrder() {
    deleteOrder(order.id);
  }

  return (
    <OrderListContainer>
      <OrderText>{order.descricao}</OrderText>
      <OrderText>{order.qtd}</OrderText>
      <OrderText>{order.valor}</OrderText>
      <OrderText>
        <TrashIcon
          src={trashIcon}
          alt="trash icon"
          onClick={handleDeleteOrder}
        />
      </OrderText>
    </OrderListContainer>
  );
}

export default OrderList;
