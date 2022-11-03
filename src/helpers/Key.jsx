import { useContext } from 'react'
import { AppContext } from '../App'
import { KeyItem } from '../components/styles/Keyboard.styled'

export const Key = ({keyVal, bigKey, disabled}) => {
  const {onSelectLetter, onDelete, onEnter} = useContext(AppContext)
  const selectKey = () => {
    if(keyVal === 'ENTER'){
      onEnter()
    } else if(keyVal === 'DELETE'){
      onDelete()
    }else {
      onSelectLetter(keyVal)
  }
}

  return <KeyItem disabled={disabled} bigKey={bigKey} onClick={selectKey} >{keyVal}</KeyItem>
}
