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