import styled from "styled-components";

export const ResultBox = styled.div`
    position: absolute;
    left: 35%;
    top: 10%;
    display: ${({over}) => over ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 30%;
    height: 3rem;
    background-color: ${({theme, win}) => win ? theme.colors.correct : theme.colors.wrong};
    color: ${({theme}) => theme.colors.light};
    border-radius: 5px;
    @media(max-width: 50em){
        width: 90%;
        left: 5%;
        top: 8%;
    }
`