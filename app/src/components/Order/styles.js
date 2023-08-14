import { styled } from "styled-components"

export const OrderContainer = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;

    @media screen and (min-width: 801px) and (max-width: 1180px) {
        width: 50%;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const OrderTitle = styled.h2 `
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const OrderHeader = styled.div `
    align-items: center;
    border-bottom: 1px solid #ffffff;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: auto;
    justify-items: center;
    padding-bottom: .5rem;
    width: 100%;
`

export const OrderHeaderText = styled.h2 `
    color: #ffffff;
    font-size: 1rem;
`

export const OrderedItemsContainer = styled.div `
    height: 100%;
    overflow: auto;
    width: 100%;

    &::-webkit-scrollbar {
        width: 5px;
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

    @media screen and (max-width: 1180px) {
        max-height: 10rem;
    }
`