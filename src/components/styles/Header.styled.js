import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 8vw;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 50em){
        height: 12vw;
    }
`

export const StyledTitle = styled.h1`
    color: ${({theme}) => theme.colors.light};
    font-size: clamp(2rem, 5vw, 4rem);
`