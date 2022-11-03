import React, {createContext, useEffect, useState}from 'react'
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { getWord } from './helpers/getWord';
import { WordsTable } from './helpers/WordsTable';

const theme = {
  colors: {
    primary: '#738078',
    secondary: '#8e9e95',
    light: '#e6fff0',
    orange: '#ff8d00',
    correct: '#04aa6d',
    almost: '#ffb84d',
    wrong: '#f44336'
  }
}

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Ubuntu', sans-serif;
    background-color: #738078;
  }
`


export const AppContext = createContext()

const correctWord = await getWord()

export const App = () => {
  const [board, setBoard] = useState(WordsTable)
  const [currentAttemp, setCurrentAttemp] = useState({attemp: 0, letterPos: 0})
  const [disabledLetter, setDisabledLetter] = useState([])
  const [gameOver, setGameOver] = useState({gameOver: false, userWin: false})


  const onSelectLetter = (keyVal) => {
    if(currentAttemp.letterPos === 5) return
    const newBoard = [...board]
    newBoard[currentAttemp.attemp][currentAttemp.letterPos] = keyVal
    setBoard(newBoard)
    setCurrentAttemp({...currentAttemp, letterPos: currentAttemp.letterPos+ 1})
  }
  
  const onDelete = () => {
    if(currentAttemp.letterPos === 0) return
    const newBoard = [...board]
    newBoard[currentAttemp.attemp][currentAttemp.letterPos - 1] = ""
    setCurrentAttemp({...currentAttemp, letterPos: currentAttemp.letterPos-1})
    setBoard(newBoard)
  }
  
  const onEnter = () => {
    if(currentAttemp.letterPos !== 5) return
    
    let userAttemp = [];
    for (let i = 0; i < 5; i++) {
      userAttemp.push(board[currentAttemp.attemp][i])
    }
    setCurrentAttemp({attemp: currentAttemp.attemp + 1, letterPos: 0})

    if(userAttemp.join('') === correctWord) setGameOver({gameOver: true, userWin: true})
    if(currentAttemp.attemp === 5) setGameOver({gameOver: true, userWin: false})
    
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Header />
        <AppContext.Provider value={{
            board, 
            setBoard, 
            currentAttemp, 
            setCurrentAttemp, 
            onSelectLetter, 
            onDelete, 
            onEnter, 
            correctWord,
            disabledLetter,
            setDisabledLetter,
            gameOver,
            setGameOver
            }}>
          <Board />
          <Keyboard />
        </AppContext.Provider>
    </ThemeProvider>
  )
}

export default App
