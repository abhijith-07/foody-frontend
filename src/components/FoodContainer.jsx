import { useEffect, useState } from "react"
import styled from "styled-components"

export default function FoodContainer({api}) {
    
    const [foodData, setFoodData] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    
    useEffect(()=>{
        setIsLoading(true)

        fetch(api).then(
            serverPromise => {
                serverPromise.json()
                .then(data=> setFoodData(data))
                setIsLoading(false)
            }
        ).catch(err=>{
            setError("Unable to Load Data")
            console.error(`Error While Loading: ${err}`)
        })
    })

    return(
        <Main>
            <MainContainer>
                <ItemContainer>
                    <img src="" alt="" />
                    <p className="title"></p>
                    <p className="description"></p>
                    <p className="price"></p>
                </ItemContainer>
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

const ItemContainer = styled.div`
    width: 12.5rem;
    height: 13rem;
    text-align: center;
    background-color: var(--dark2);
    border-radius: 1rem;
    color: var(--white);

    img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background-color: var(--primary);
        margin-top: -3rem;
    }

    .title {
        font-weight: 600;
    }

    .description {
        color: var(--light)
    }
`