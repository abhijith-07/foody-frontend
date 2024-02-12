import styled from "styled-components"

export default function ItemContainer({foodData, api}) {
        return ( 
            <>
            {foodData.map((data, index) => (
                <Item key={index}>
                    <img src={`http://localhost:8000${data.image}`} alt="" />
                    <p className="title">{data.name}</p>
                    <p className="description">{data.text}</p>
                    <p className="price"><span className="material-symbols-outlined">currency_rupee</span>
                    {data.price}</p>
                </Item>
            ))
            }  
            </>
             
        )
}

const Item = styled.div`
    width: 15rem;
    height: 14rem;
    text-align: center;
    background-color: var(--dark2);
    border-radius: 1rem;
    color: var(--white);
    cursor: pointer;

    img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background-color: var(--primary);
        margin-top: -3rem;
        object-fit: cover;
    }

    .title {
        font-weight: 600;
    }

    .description {
        color: var(--light);
        font-size: 0.85rem;
    }

    .price span {
        font-size: .9rem;
        color: var(--light);
    }
`