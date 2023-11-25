import styled from 'styled-components'

export function CityDisplay() {
    return (
        <CityContent>
            <h1>São Paulo</h1>
            <p>Lat: 23.34 Long: 10.99 </p>
        </CityContent>
    )
}

const CityContent = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 100px;
        font-size: calc(32px + 5vw);
    }

    p {
        font-size: 24px;
        font-size: calc(12px + 0.5vw);
    }
`
