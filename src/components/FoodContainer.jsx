import { useEffect, useState } from "react"
import styled from "styled-components"
import ItemContainer from "./ItemContainer"

export default function FoodContainer({api, searchValue}) {
    const staticData = [
        {"id": 1, "name": "Boiled Egg", "price": 10.0, "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "image": "src/assets/images/egg.jpg", "type": "breakfast"}, 
        {"id": 2, "name": "Ramen", "price": 125.0, "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "image": "src/assets/images/ramen.jpg", "type": "lunch"}, 
        {"id": 3, "name": "Grilled Chicken", "price": 100.0, "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "image": "src/assets/images/chicken.jpg", "type": "dinner"}, 
        {"id": 4, "name": "Burger", "price": 40.0, "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "image": "src/assets/images/burger.jpg", "type": "lunch"}, 
        {"id": 5, "name": "Pancake", "price": 50.0, "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "image": "src/assets/images/pancake.jpg", "type": "dinner"}, 
        {"id": 6, "name": "Cake", "price": 80.0, "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "image": "src/assets/images/cake.jpg", "type": "breakfast"}
    ]
    const [foodData, setFoodData] = useState(staticData)
    const [filterData, setFilterData] = useState(staticData)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    {/* Static Data */}

    function fetchData() {
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);

    useEffect(() => {
        if(searchValue==="" || searchValue===undefined){
            setFilterData(staticData)
            return
        }

        const filter = foodData?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilterData(filter)
    }, [searchValue])


    if (error) return <div>Something Went Wrong...</div>
    if (isLoading) return <div style={{color: "white"}}>
        <Loader>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Loader>
    </div>

    return(
        <Main>
            <MainContainer>
                <ItemContainer foodData={filterData} api={api}/>
            </MainContainer>
        </Main>
    )
}

const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    }
    .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
    }
    .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
    }
    .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
    }
    .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
    }
    .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
    }
    .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
    }
    .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
    }
    .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
    }
    .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
    }
    .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
    }
    @keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }

`

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