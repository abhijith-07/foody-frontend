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
    display: flex;
    width: 980px;
`

const ItemContainer = styled.div`
`