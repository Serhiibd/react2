import './App.css'
import Greeting from "./components/Greetings"
import Message from './components/Message'
import Button from "./components/Button"

const name = "Сергій"
const text = "Добрий день!"

function App() {
  const handleClick = () => {
    console.log("Ви натиснули на кнопку!")
  }

  return (
    <>
      <h1>awdawdawawd</h1>
      <Greeting name={name} />
      <Message text={text} />
      <Button onClick={handleClick} />
    </>
  )
}

export default App