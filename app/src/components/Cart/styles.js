import { styled } from "styled-components"

export const CartContainer = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;

    @media screen and (min-width: 801px) and (max-width: 1180px) {
        gap: 2rem;
        height: 100%;
        width: 50%;
    }

    @media screen and (max-width: 800px) {
        gap: 2rem;
        width: 100%;
    }
`

export const TitleAndIconContainer = styled.div `
    align-items: center;
    border-bottom: 1px solid #ffffff;
    border-top: 1px solid #ffffff;
    display: flex;
    gap: .5rem;
    height: 20%;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 801px) and (max-width: 1180px) {
        border: none;
    }
`

export const CartTitle = styled.h2 `
    color: #ffffff;
    font-size: 2rem;
    text-align: center;
`

export const CartIcon = styled.img `
    width: 30px;
`

export const PaymentContainer = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-around;
    width: 100%;

    @media screen and (max-width: 1180px) {
        gap: 1rem;
    }
`

export const PaymentSelectContainer = styled.div `
    align-items: center;
    display: flex;
    gap: 1rem;
    height: 20%;
    justify-content: center;
    width: 100%;
`

export const PaymentTitle = styled.h3 `
    color: #ffffff;
    font-size: 1.2rem;
    text-align: center;
`

export const PaymentSelect = styled.select `
    background-color: #f14452;
    border: 1px solid #ffffff;
    border-radius: 1px;
    color: #ffffff;
    cursor: pointer;
    height: 50%;
    text-align: center;
    width: 30%;
`

export const PaymentPrice = styled.h4 `
    color: #ffffff;
    font-size: 2.5rem;
`

export const PaymentButton = styled.button `
    background-color: green;
    border: none;
    border-radius: 99999999px;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.2rem;
    height: 20%;
    transition: .2s;
    width: 60%;

    &:hover {
        transform: scale(1.02);
    }

    &:active {
        transform: scale(0.95);
    }

    @media screen and (max-width: 1180px) {
        height: 2.5rem;
    }
`