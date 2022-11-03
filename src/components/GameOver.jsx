import { useContext } from "react"
import { AppContext } from "../App"
import { ResultBox } from "./styles/GameOver.styled"
import 'animate.css'

export const GameOver = () => {

const {gameOver, correctWord} = useContext(AppContext)

return (
    <ResultBox className="animate__bounceIn" win={gameOver.userWin} over={gameOver.gameOver}>
        {gameOver.userWin ? 'Well done!!!' : `You failed :(, the correct word is: ${correctWord} `}
    </ResultBox>
  )
}
