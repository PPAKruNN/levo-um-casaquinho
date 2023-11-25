import styled from 'styled-components'

export function DateDisplay() {
    return (
        <DisplayContent>
            <h3>16/11/2023</h3>
            <h3>Quinta-feira, 16:32</h3>
        </DisplayContent>
    )
}

const DisplayContent = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    font-size: calc(12px + 0.5vw);
`
