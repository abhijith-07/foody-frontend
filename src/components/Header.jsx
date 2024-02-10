import styled from "styled-components"
import Navigation from "./Navigation"

export default function Header() {
    return(
        <>
        <Navigation />
        <Menu>
            <ul>
                <li className="active">All</li>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
            </ul>
        </Menu>
        </>
    )
}

const Menu = styled.div`
    display: flex;
    border-bottom: 2px solid var(--baseLine);

    ul li {
        color: var(--white);
        cursor: pointer;
        display: inline-block;
        padding: 0 1rem;
        margin: 0.5rem;
    }

    ul li:hover {
        color: var(--primary);
    }

    ul li:first-child {
        padding-left: 0;
        margin-left: 17.25rem;
    }

    .active {
        color: var(--primary);
        position: relative;
    }

    .active::before {
        content: "";
        position: absolute;
        width: 2rem;
        height: 1px;
        bottom: 0;
        border-bottom: 1px solid var(--primary);
    }

`