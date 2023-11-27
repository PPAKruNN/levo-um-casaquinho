import styled from 'styled-components'

export function Error() {
    return (
        <ErrorContent>
            <h1>404 // </h1>
            <div>
                <h2>Página não</h2>
                <h2>encontrada</h2>
                <span>
                    Volte para a <a href="/">página principal.</a>
                </span>
            </div>
        </ErrorContent>
    )
}

const ErrorContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    width: 100%;
    height: 100vh;
    gap: 12px;

    font-family: 'Poppins', sans-serif;

    h1 {
        font-size: 128px;
        margin: 0px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2 {
        font-size: 42px;
        margin: 0;
    }
`
