import { useEffect, useState } from "react";
import { CardContainer, CardText, CardInput, CardButton } from "./styles";
import { useCartStore } from "../../store/useCartStore";
import { useOrderList } from "../../store/useOrderList";

function MenuCard({ itemCardapio }) {
  const [inputValue, setInputValue] = useState("");
  const { cartItems, setCartItems } = useCartStore();
  const { orderList, setOrderList } = useOrderList();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleAddItems();
    }
  }

  function handleAddItems() {
    if (itemCardapio.codigo === "") {
      alert("Item inválido!");
      setInputValue("");
      return;
    }

    if (inputValue === "" || parseFloat(inputValue) === 0) {
      alert("Quantidade inválida!");
      return;
    }

    if (itemCardapio.codigo === "chantily") {
      const coffee = orderList.some((order) => order.codigo === "cafe");
      if (!coffee) {
        alert("Item extra não pode ser pedido sem o principal");
        setInputValue("");
        return;
      }
    }

    if (itemCardapio.codigo === "queijo") {
      const sandwich = orderList.some((order) => order.codigo === "sanduiche");
      if (!sandwich) {
        alert("Item extra não pode ser pedido sem o principal");
        setInputValue("");
        return;
      }
    }

    if (inputValue.includes(".") || inputValue.includes(",")) {
      alert("oi Quantidade inválida!");
      return;
    }

    const items = `${itemCardapio.codigo},${parseFloat(inputValue)}`;
    setCartItems([...cartItems, items]);

    const newOrder = {
      id: Math.random(),
      codigo: itemCardapio.codigo,
      descricao: itemCardapio.descricao,
      qtd: parseFloat(inputValue),
      valor: itemCardapio.valor,
    };

    setOrderList([...orderList, newOrder]);
    setInputValue("");
  }

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 740);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <CardContainer>
      {!isSmallScreen && <CardText>{itemCardapio.codigo}</CardText>}
      <CardText>{itemCardapio.descricao}</CardText>
      <CardText>{itemCardapio.valor}</CardText>
      <CardInput
        type="text"
        maxLength={3}
        onChange={handleInputValue}
        onKeyDown={handleKeyPress}
        value={inputValue}
      />
      <CardButton onClick={handleAddItems}>Add+</CardButton>
    </CardContainer>
  );
}

export default MenuCard;
