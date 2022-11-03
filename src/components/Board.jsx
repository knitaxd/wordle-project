import { BoardBox, StyledBoard} from "./styles/Board.styled"
import {WordsTable} from '../helpers/WordsTable'
import { Letter } from "../helpers/Letter"
import { GameOver } from "./GameOver"

export const Board = () => {
    return (
    <StyledBoard>
        <GameOver />
        <BoardBox>
            {
                WordsTable[0].map((item, i) => (
                    <Letter key={i} attempVal={0} letterPos={i} />
                ))
            }
            {
                WordsTable[1].map((item, i) => (
                    <Letter key={i} attempVal={1} letterPos={i} />
                ))
            }
            {
                WordsTable[2].map((item, i) => (
                    <Letter key={i} attempVal={2} letterPos={i} />
                ))
            }
            {
                WordsTable[3].map((item, i) => (
                    <Letter key={i} attempVal={3} letterPos={i} />
                ))
            }
            {
                WordsTable[4].map((item, i) => (
                    <Letter key={i} attempVal={4} letterPos={i} />
                ))
            }
            {
                WordsTable[5].map((item, i) => (
                    <Letter key={i} attempVal={5} letterPos={i} />
                ))
            }
        </BoardBox>
    </StyledBoard>
    )
}
