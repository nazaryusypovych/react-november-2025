import './App.css'
import MyComponent from "./components/mycomponent.tsx";

function App() {

  return (
    <>
      <MyComponent title={`nazar hi`}>I love pizza</MyComponent>

        <MyComponent title={`nazar hi2`}></MyComponent>

        <MyComponent title={`nazar hi3`}/>


        {/*{MyComponent({text: `vova hi`})}*/}
    </>
  )
}

export default App
