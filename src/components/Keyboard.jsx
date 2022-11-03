import { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { Key } from '../helpers/Key'
import { StyledKeyboard, KeyboardBox, KeyLineOne, KeyLineTwo, KeyLineThree} from './styles/Keyboard.styled'

export const Keyboard = () => {

  const {onSelectLetter, onDelete, onEnter, disabledLetter} = useContext(AppContext)

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]

  const handleKeyboard = useCallback((e) => {
      if(e.key === 'Enter'){
        onEnter()
      } else if( e.key === 'Backspace'){
        onDelete()
      } else {
        keys1.map(key => {
          if(e.key.toLowerCase() === key.toLowerCase()){
            onSelectLetter(key)
          } 
        })
        keys2.map(key => {
          if(e.key.toLowerCase() === key.toLowerCase()){
            onSelectLetter(key)
          }
        })
        keys3.map(key => {
          if(e.key.toLowerCase() === key.toLowerCase()){
            onSelectLetter(key)
          }
        })
      }
  })
  


  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
    }

  }, [handleKeyboard])
  

  return (
    <StyledKeyboard>
        <KeyboardBox>
          <KeyLineOne>
            {
              keys1.map((val, i) => (
                <Key key={i} keyVal={val} disabled={disabledLetter.includes(val)}/>
              ))
            }
          </KeyLineOne>
          <KeyLineTwo>
            {
              keys2.map((val, i) => (
                <Key key={i} keyVal={val} disabled={disabledLetter.includes(val)}/>                
              ))
            }
          </KeyLineTwo>
          <KeyLineThree>
            <Key keyVal={'DELETE'} bigKey={true} />
            {
              keys3.map((val, i) => (
                <Key key={i} keyVal={val} bigKey={false} disabled={disabledLetter.includes(val)}/>
              ))
            }
            <Key keyVal={'ENTER'} bigKey={true} />
          </KeyLineThree>
        </KeyboardBox>
    </StyledKeyboard>
  )
}
