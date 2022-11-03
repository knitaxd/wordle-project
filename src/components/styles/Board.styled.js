import styled from "styled-components";

export const StyledBoard = styled.section`
    width: 100%;
    height: auto;
    background-color: ${({theme}) => theme.colors.primary};
    padding: 4rem 0;
    @media(max-width: 50em){
        padding: 2rem 0;
    }
`

export const BoardBox = styled.div`
    width: 35%;
    height: auto;
    color: ${({theme}) => theme.colors.secondary};
    margin: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: .5rem;
    @media(max-width: 50em){
        width: 90%;
    }
`

export const BoardItem = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    height: 5rem;
    border-radius: 5px;
    font-size: 2rem;
    color: ${({theme}) => theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: center;

.correct&{
    background-color: ${({theme}) => theme.colors.correct};
}
.almost&{
    background-color: ${({theme}) => theme.colors.almost};
}
.error&{
    background-color: ${({theme}) => theme.colors.wrong};
}
`

