import { styled } from "styled-components";

export const CardContainer = styled.div `
    align-items: center;
    border-bottom: 1px solid white;
    color: #fff;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 20% 40% 10% 15% 15%;
    grid-template-rows: 1fr;
    height: 75px;
    justify-items: center;
    padding: .5rem;
    width: 100%;
    
    @media screen and (max-width: 740px) {
        grid-template-columns: 45% 20% 20% 15%;
    }   
`

export const CardText = styled.p `
    font-size: 1.3rem;
    text-align: center;

    @media screen and (max-width: 575px) {
        font-size: 1rem;
    }
`

export const CardInput = styled.input `
    border: 1px solid black;
    border-radius: .5rem;
    font-size: 1.5rem;
    height: 70%;
    padding: .5rem;
    text-align: center;
    width: 50%;

    @media screen and (max-width: 575px) {
        width: 90%;
    }
`

export const CardButton = styled.button `
    background-color: #f14452;
    border: none;
    border-radius: .5rem;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.2rem;
    height: 70%;
    padding: .3rem;
    transition: .2s;
    width: 100%;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(0.95);
    }

    @media screen and (max-width: 575px) {
        font-size: .65rem;
    }
`

