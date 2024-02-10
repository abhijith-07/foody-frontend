import styled from "styled-components"

export default function Navigation() {
    return(
        <MainNavigation>
            <div className="nav-content">
                <h1>F<Red>oo</Red>dy Z<Red>o</Red>ne</h1>
                <div className="search">
                    <label class="material-symbols-outlined" for="search">
                        search
                    </label>
                    <input type="text" placeholder="Search for Foodies..." id="search"/>
                </div>
            </div>
        </MainNavigation>
    )
}

const MainNavigation = styled.div`
    display: flex;
    height: 5rem;
    align-items: center;
    justify-content: center;
    color: var(--white);
    width: 100%;

    .nav-content {
        display: flex;
        justify-content: space-between;
        width: 980px;
    }
    
    .search {
        display: flex;
        align-items: center;
    }

    .search {
        label {
            position: absolute;
            cursor: pointer;
            margin-left: 0.5rem;
        }
    }

    .search {
        input {
            height: 2rem;
            width: 15rem;
            padding: 1.5rem 1rem 1.5rem 3rem;
            color: var(--white);
            background-color: var(--baseBg);
            border: var(--baseLine);
            border-radius: .25em;
            outline: var(--baseLine);
        }

        input:focus{
            border: 2px solid var(--white);
        }
    }
`

const Red = styled.span`
    color: var(--primary);
`