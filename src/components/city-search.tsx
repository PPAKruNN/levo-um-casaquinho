import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useWeather } from '../hooks/context-hooks'

export function CitySearch() {
    const cityInput = useRef<HTMLInputElement>(null)
    const { searchForCity, updateLocation } = useWeather()

    async function handleSearch() {
        if (cityInput.current == null || cityInput.current.value.trim() == '')
            return

        const searchPromise = searchForCity(cityInput.current.value)
        searchToastHandler(searchPromise)
        const geocodeOptions = await searchPromise

        if (geocodeOptions.length === 0) {
            toast.error(
                'Cidade não encontrada, verifique se o nome está correto'
            )
            return
        }

        updateLocation(geocodeOptions[0])
    }

    async function searchToastHandler(prom: Promise<unknown>) {
        if (cityInput.current == null) return
        cityInput.current.disabled = true

        toast.promise(prom, {
            pending: 'Buscando dados "nas nuvens"',
            error: 'Erro ao se conectar nos servidores meteorológicos, verifique sua conexão com a internet ou tente novamente mais tarde.',
        })

        await prom

        cityInput.current.disabled = false
    }

    return (
        <SearchBox>
            <span onClick={handleSearch}>
                <FaSearch size={24} style={{ fill: '#8B9CAF' }} />
            </span>

            <input
                autoFocus
                type="text"
                alt="City search input"
                placeholder="Procure por uma cidade"
                ref={cityInput}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') handleSearch()
                }}
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

    span:hover {
        cursor: pointer;
    }

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
