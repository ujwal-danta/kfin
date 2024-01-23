import FetchComponent from "@api/FetchComponent"
import Button from "@components/Button/Button"





const App = () => {
  return (
    <div>
      <FetchComponent/>
      <Button name="click me" buttonClick={()=>{}} />
    </div>
  )
}

export default App