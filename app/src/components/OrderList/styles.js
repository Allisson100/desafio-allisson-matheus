import { styled } from "styled-components"

export const OrderListContainer = styled.div `
    align-items: center;
    border-bottom: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: 20%;
    justify-items: center;
    width: 100%;
`

export const OrderText = styled.p `
    color: #ffffff;
    font-size: 1rem;
    text-align: center;
`

export const TrashIcon = styled.img `
    cursor: pointer;
    transition: .2s;
    width: 20px;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`