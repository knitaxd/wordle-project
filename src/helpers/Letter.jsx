import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App'
import { BoardItem } from '../components/styles/Board.styled'
 

export const Letter = ({letterPos, attempVal}) => {
  const {board, correctWord, currentAttemp, disabledLetter, setDisabledLetter} = useContext(AppContext)
  const letter = board[attempVal][letterPos]
  
  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== '' && correctWord.includes(letter)

  const letterState = currentAttemp.attemp > attempVal && (correct ? 'correct' : almost ? 'almost' : 'error')

  useEffect(() => {
    if(!correct && letter !== '' && !almost){
      setDisabledLetter(prev => [...prev, letter])
    }
  }, [currentAttemp.attemp])
  

  return <BoardItem className={letterState}>{""}{letter}</BoardItem>
  
}
