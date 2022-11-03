import styled from "styled-components";

export const StyledKeyboard = styled.section`
    width: 100%;
    height: auto;
    margin: 0 auto;
    
`

export const KeyboardBox = styled.div`
    width: 50%;
    height: auto;
    margin: 0 auto;
    user-select: none;
    @media(max-width: 50em){
        width: 90%;
    }
`

export const KeyLineOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
`
export const KeyLineTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
`
export const KeyLineThree = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
`

export const KeyItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 700;
    width: ${({bigKey}) => bigKey ? '5rem' : '3rem'};
    height: 90%;
    margin: 0 .2rem;
    background-color: ${({theme, bigKey}) => bigKey ? theme.colors.orange : theme.colors.light};
    color: ${({theme, bigKey}) => bigKey ? theme.colors.light : theme.colors.orange};
    font-size: ${({bigKey}) => bigKey ? '1rem' : '1.5rem'};
    opacity: ${({disabled}) => disabled ? '0.5' : '1'};
    &:hover{
        cursor: pointer;
    }
`
