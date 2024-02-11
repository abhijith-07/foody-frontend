import { useEffect, useState } from "react"
import styled from "styled-components"
import ItemContainer from "./ItemContainer"

export default function FoodContainer({api}) {
    
    const [foodData, setFoodData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    
    async function fetchData() {
        try {
          const response = await fetch(api);
          const data = await response.json();
          setFoodData(data);
        } catch (err) {
          setError("Unable to Load Data");
          console.error(`Error While Loading: ${err}`);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);

    

    if (error) return <div>Something Went Wrong...</div>
    if (isLoading) return <div style={{color: "white"}}>Loading...</div>

    return(
        <Main>
            <MainContainer>
                <ItemContainer foodData={foodData} api={api}/>
            </MainContainer>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const MainContainer = styled.div`
    width: 980px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;
    gap: 6rem;
`