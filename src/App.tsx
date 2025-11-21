import './App.css'
import {products} from "./components/data/ProductsList.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";

function App() {


  return (

      <>

      {
        products.map((product, index) => <MyProduct key={index} product={product}/>)
      }

      </>
  )
}

export default App
