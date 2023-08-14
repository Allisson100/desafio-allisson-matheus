import {
  OrderContainer,
  OrderTitle,
  OrderedItemsContainer,
  OrderHeader,
  OrderHeaderText,
} from "./styles";
import { useOrderList } from "../../store/useOrderList";
import { useCartStore } from "../../store/useCartStore";
import OrderList from "../OrderList";
import NoOrder from "../NoOrder";
import { useEffect } from "react";

function Order() {
  const { orderList, setOrderList } = useOrderList();
  const { cartItems, setCartItems } = useCartStore();

  function deleteOrder(id) {
    setOrderList(orderList.filter((order) => order.id !== id));
  }

  useEffect(() => {
    const newCartItems = orderList.map(
      (order) => `${order.codigo},${order.qtd}`
    );
    setCartItems(newCartItems);
  }, [orderList]);

  return (
    <OrderContainer>
      <OrderTitle>Lista de pedidos</OrderTitle>
      {cartItems.length !== 0 ? (
        <>
          <OrderHeader>
            <OrderHeaderText>Item</OrderHeaderText>
            <OrderHeaderText>Qtd</OrderHeaderText>
            <OrderHeaderText>Preço</OrderHeaderText>
          </OrderHeader>
          <OrderedItemsContainer>
            {orderList.map((order) => (
              <OrderList
                key={order.id}
                order={order}
                deleteOrder={deleteOrder}
              />
            ))}
          </OrderedItemsContainer>
        </>
      ) : (
        <NoOrder>Não há itens na lista de pedidos!</NoOrder>
      )}
    </OrderContainer>
  );
}

export default Order;
