// eslint-disable-next-line no-unused-vars
import styled from 'styled-components'

export const SectionContent=styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;

    & .H1Titulo{
        color: #FF00FF;
        opacity: 0;
        animation: fadeIn 1s ease-in-out forwards;
        font-size: 35px;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateX(-50px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
`


export const BoxContent=styled.div`
    max-width:100%;
    height: 6rem;
    border: 1px solid black;
    grid-auto-flow: column;
    grid-gap: 1rem;
    display: grid;
    border-radius: 8px;
    padding:.5rem;
    margin-bottom: 1rem;
    color:black;
`
export const BoxInput=styled.div`
    width: 20rem;
    height: 5rem;
    background-color: RGB(100 100 100);
    padding: 1rem;
    border-radius: 5px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    & input{
        margin-bottom: .5rem;
        width: 20rem;
        height: 2rem;
        font-size: 20px;
        border: none;
        text-align: center;
        border-radius: 5px;
        outline: none;
    }

    & button{
        width: 5rem;
        height: 4rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: .5s;
        font-weight: 700;
        font-size: 25px;
        margin-top: .5rem;
    }

    & button:hover{
        box-shadow: 0px 0px 9px 4px rgba(0,0,0,0.75);
    }
`

export const BtnIniciar=styled.button`
    width: 10rem;
    height: 2rem;
    border: none;
    background-color: #FFA500;
    transition: all.5s;
    font-weight:500;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 3rem;

    &&:hover{
        box-shadow: 0px 0px 9px 4px rgba(0,0,0,0.75);
        background-color: #FFFF00;
    }
`

export const CategoriaSorteadaH2=styled.h2`
    color: #800080;
    text-align: center;
    width: 25rem;
    margin-bottom: 3rem;
`