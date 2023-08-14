import {
  CartContainer,
  TitleAndIconContainer,
  CartTitle,
  CartIcon,
  PaymentContainer,
  PaymentTitle,
  PaymentSelectContainer,
  PaymentSelect,
  PaymentPrice,
  PaymentButton,
} from "./styles";

import cartIcon from "../../assets/img/cartIcon.png";
import NoOrder from "../NoOrder";
import { useOrderList } from "../../store/useOrderList";
import { useCartStore } from "../../store/useCartStore";
import { CaixaDaLanchonete } from "../../caixa-da-lanchonete";
import { useEffect, useState } from "react";

function Cart() {
  const { setOrderList } = useOrderList();
  const { cartItems, setCartItems } = useCartStore();

  const [price, setPrice] = useState("0,00");
  const [paymentMethod, setPaymentMethod] = useState("");

  const caixaDaLanchonete = new CaixaDaLanchonete();

  useEffect(() => {
    setPrice(() => {
      return caixaDaLanchonete.calcularValorDaCompra(cartItems, paymentMethod);
    });
  }, [cartItems, paymentMethod]);

  function handlePayment(e) {
    setPaymentMethod(e.target.value);
  }

  function handleFinalOrder() {
    if (cartItems.length === 0) {
      alert("Não há itens na lista de pedido!");
      return;
    }

    if (
      paymentMethod !== "credito" &&
      paymentMethod !== "debito" &&
      paymentMethod !== "dinheiro"
    ) {
      alert("Forma de pagamento inválida!");
      return;
    }

    alert("Compra finalizada!");
    setCartItems([]);
    setOrderList([]);
    setPaymentMethod("");
  }

  return (
    <CartContainer>
      <TitleAndIconContainer>
        <CartTitle>Carrinho de compras</CartTitle>
        <CartIcon src={cartIcon} alt="Cart Icon" />
      </TitleAndIconContainer>
      {cartItems.length === 0 ? (
        <NoOrder>Não há itens no carrinho de compra!</NoOrder>
      ) : (
        <PaymentContainer>
          <PaymentSelectContainer>
            <PaymentTitle>Método de pagamento: </PaymentTitle>
            <PaymentSelect onChange={handlePayment}>
              <option value="nenhum"></option>
              <option value="credito">Crédito</option>
              <option value="debito">Débito</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="outro">Outro</option>
            </PaymentSelect>
          </PaymentSelectContainer>
          <PaymentPrice>R$ {price}</PaymentPrice>
          <PaymentButton onClick={handleFinalOrder}>
            Finalizar Compra
          </PaymentButton>
        </PaymentContainer>
      )}
    </CartContainer>
  );
}

export default Cart;
