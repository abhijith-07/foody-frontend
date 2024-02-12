import Header from "./components/Header"
import FoodContainer from "./components/FoodContainer"
import BASE_URL from "./config/url-fallback.json"
import { useState } from "react"

function App() {
  const {api} = BASE_URL 

  const [searchValue, setSearchValue] = useState()

  return (
    <>
      <Header setSearchValue={setSearchValue} />
      <FoodContainer api={api} searchValue={searchValue} />
    </>
  )
}

export default App
