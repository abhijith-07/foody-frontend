import Header from "./components/Header"
import FoodContainer from "./components/FoodContainer"
import BASE_URL from "./config/url-fallback.json"

function App() {
  const {api} = BASE_URL 

  return (
    <>
      <Header />
      <FoodContainer api={api} />
    </>
  )
}

export default App
