import { styled } from "styled-components";

export const HomeContainer = styled.main `
    column-gap: 5%;
    display: flex;
    height: 100%;
    row-gap: 1rem;
    width: 100%;

    @media screen and (max-width: 1180px) {
        flex-direction: column;
    }
`

export const MenuContainer = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;

    @media screen and (max-width: 1180px) {
        width: 100%;
    }
`

export const HomeInput = styled.input `
    border: none;
    border-radius: 1rem;
    font-size: 1.2rem;
    height: 7%;
    padding: .5rem;
    width: 100%;
`

export const HeaderContainer = styled.div `
    align-items: center;
    border-bottom: 1px solid white;
    color: #fff;
    display: grid;
    grid-template-columns: 20% 40% 10% 15% 15%;
    grid-template-rows: 1fr;
    height: 75px;
    justify-items: center;
    padding: .5rem;
    width: calc(100% - 10px);

    @media screen and (min-width: 741px) and (max-width: 1180px) {
        width: 100%;
    }

    @media screen and (max-width: 740px) {
        grid-template-columns: 45% 20% 20% 15%;
    }
`

export const HomeText = styled.p `
    color: #f14452;
    font-size: 1.3rem;

    @media screen and (max-width: 575px) {
        font-size: 1rem;
    }
`

export const ItemsContainer = styled.div `
    height: 100%;
    overflow-y: auto;
    width: 100%;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #ffffff;
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background: #f16873;
        border-radius: 1rem;
        padding: 10px;
    }
`

export const CartAndOderContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 5%;
    height: 100%;
    justify-content: space-between;
    width: 35%;
    
    @media screen and (min-width: 801px) and (max-width: 1180px) {
        flex-direction: row;
        width: 100%;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }
`