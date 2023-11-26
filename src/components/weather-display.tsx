import styled from 'styled-components'
import { WeatherEnum } from '../protocols'

type WeatherDisplayProps = {
    weather: WeatherEnum
}

export function WeatherDisplay(props: WeatherDisplayProps) {
    return (
        <DisplayContent>
            <div>
                <span>•</span>
                <h1>31</h1>
                <h2>°C</h2>
            </div>
            <p>Céu aberto</p>
            <hr></hr>
        </DisplayContent>
    )
}

const DisplayContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    font-size: 150px;
    font-size: calc(12px + 6vw);
    font-weight: 300;

    hr {
        width: calc(22px + 20vw);
        border: 2.5px solid #ededed;
    }

    p {
        font-weight: 400;
        font-size: 24px;
        font-size: calc(12px + 0.75vw);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25vw;

        span {
            font-size: 280px;
            font-size: calc(18px + 12vw);
            line-height: 100px;

            -webkit-user-select: none; /* Safari */
            -ms-user-select: none; /* IE 10 and IE 11 */
            user-select: none; /* Standard syntax */
        }

        h2 {
            align-self: flex-start;
            font-size: 100px;
            font-size: calc(12px + 4vw);
        }
    }
`
