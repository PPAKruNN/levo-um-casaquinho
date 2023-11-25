import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

export function CitySearch() {
    return (
        <SearchBox>
            <FaSearch size={24} style={{ fill: '#8B9CAF' }} />

            <input
                type="text"
                alt="City search input"
                placeholder="Procure por uma cidade"
            />
        </SearchBox>
    )
}

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    width: 100%;
    padding: 18px;

    border-radius: 18px;
    box-shadow: 0px 12px 48px rgba(49, 79, 124, 0.12);
    background-color: #ededef;
    outline: transparent;

    &:focus-within {
        outline: 2px solid #aecce4;
    }

    svg {
        color: #8b9caf;
    }

    input {
        height: 100%;
        width: 100%;
        border: none;
        background-color: transparent;

        font-family: 'Montserrat', sans-serif;
        color: #222222;
        font-size: 22px;
        font-size: calc(12px + 0.5vw);
    }

    input::placeholder {
        font-family: 'Montserrat', sans-serif;
        color: #424243;
    }

    input:focus {
        outline: none;
    }

    transition: 0.5s ease-out;
`
