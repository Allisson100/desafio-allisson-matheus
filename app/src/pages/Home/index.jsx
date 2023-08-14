import MenuCard from "../../components/MenuCard";
import {
  HomeContainer,
  MenuContainer,
  HomeInput,
  HeaderContainer,
  HomeText,
  ItemsContainer,
  CartAndOderContainer,
} from "./styles";

import cardapio from "../../assets/mock";
import Cart from "../../components/Cart";
import Order from "../../components/Order";
import { useEffect, useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleInputValue(e) {
    setInputValue(e.target.value);
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
    <HomeContainer>
      <MenuContainer>
        <HomeInput
          type="text"
          onChange={handleInputValue}
          value={inputValue}
          placeholder="Digite o que procura aqui ..."
        />
        <HeaderContainer>
          {!isSmallScreen && <HomeText>Código</HomeText>}
          <HomeText>Descrição</HomeText>
          <HomeText>Valor</HomeText>
          <HomeText>Qtd</HomeText>
        </HeaderContainer>
        <ItemsContainer>
          {cardapio
            .filter((item) =>
              inputValue !== ""
                ? item.codigo.startsWith(inputValue.toLowerCase())
                : true
            )
            .map((itemCardapio) => (
              <MenuCard key={itemCardapio.id} itemCardapio={itemCardapio} />
            ))}
        </ItemsContainer>
      </MenuContainer>

      <CartAndOderContainer>
        <Order />
        <Cart />
      </CartAndOderContainer>
    </HomeContainer>
  );
}

export default Home;
