import Header from "./components/Header"
import FoodContainer from "./components/FoodContainer"
import BASE_URL from "./config/url-fallback.json"
import { useState } from "react"

function App() {
  const {api} = BASE_URL 

  const [searchValue, setSearchValue] = useState()
  const [selectedBtn, setSelectedBtn] = useState("all")

  return (
    <>
      <Header setSearchValue={setSearchValue} setSelectedBtn={setSelectedBtn} selectedBtn={selectedBtn}/>
      <FoodContainer api={api} searchValue={searchValue} selectedBtn={selectedBtn} />
    </>
  )
}

export default App
