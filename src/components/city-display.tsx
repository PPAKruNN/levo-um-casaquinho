import styled from 'styled-components'
import { useWeather } from '../hooks/context-hooks'

export function CityDisplay() {
    const { geocode } = useWeather()

    if (!geocode) return <></>

    return (
        <CityContent>
            <h1>{geocode.local_names?.pt ?? geocode.name}</h1>
            <p>
                Lat: {geocode?.lat.toFixed(2)} Long: {geocode?.lon.toFixed(2)}
            </p>
        </CityContent>
    )
}

const CityContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    h1 {
        font-size: 100px;
        font-size: calc(32px + 5vw);
    }

    p {
        font-size: 24px;
        font-size: calc(12px + 0.5vw);
    }
`
