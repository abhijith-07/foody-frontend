import styled from "styled-components"

export default function FoodContainer() {
    return(
        <Main>
            <MainContainer>
                <ItemContainer>
                    <img src="" alt="" />
                    <p className="title">s</p>
                    <p className="description">s</p>
                    <p className="price">a</p>
                </ItemContainer>
                <ItemContainer>
                    <img src="" alt="" />
                    <p className="title">s</p>
                    <p className="description">s</p>
                    <p className="price">a</p>
                </ItemContainer>
                <ItemContainer>
                    <img src="" alt="" />
                    <p className="title">s</p>
                    <p className="description">s</p>
                    <p className="price">a</p>
                </ItemContainer>
                <ItemContainer>
                    <img src="" alt="" />
                    <p className="title">s</p>
                    <p className="description">s</p>
                    <p className="price">a</p>
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
    margin-top: 6rem;
    gap: 6rem;
`

const ItemContainer = styled.div`
    background-color: red;
    width: 10rem;
    text-align: center;
    img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background-color: var(--primary);
        margin-top: -4rem;
    }
`