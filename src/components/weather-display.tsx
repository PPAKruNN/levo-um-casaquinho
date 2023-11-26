import styled from 'styled-components'
import { Weather, WeatherEnum } from '../protocols'

type WeatherDisplayProps = {
    weatherState?: WeatherEnum
    weather?: Weather
    unit: string
}

export function WeatherDisplay(props: WeatherDisplayProps) {
    function KelvinToUnit(kelvin: number): number {
        if (props.unit == 'C') return Math.ceil(kelvin - 273.15)
        return Math.ceil(kelvin * 1.8 - 459.67)
    }

    if (!props.weather)
        return (
            <DisplayContent>
                <div>
                    <h1> - - </h1>
                </div>
                <hr></hr>
            </DisplayContent>
        )

    return (
        <DisplayContent $weather={props.weatherState}>
            <div>
                <img
                    src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@4x.png`}
                ></img>
                <h1>{KelvinToUnit(props.weather.main.temp)}</h1>
                <h2>°{props.unit}</h2>
            </div>
            <p>{props.weather.weather[0].description}</p>
            <hr></hr>
        </DisplayContent>
    )
}

type PropsSC = {
    $weather?: WeatherEnum
}

const DisplayContent = styled.div<PropsSC>`
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

        img {
            width: 100px;
            width: calc(52px + 6vw);
            aspect-ratio: 1;
        }

        h2 {
            align-self: flex-start;
            font-size: 100px;
            font-size: calc(12px + 4vw);
        }

        h2,
        h1 {
            color: ${(p) => {
                switch (p.$weather) {
                    case WeatherEnum.Clear:
                        return '#EC6E4C'
                    case WeatherEnum.Drizzle:
                        return '#92cae6'
                    case WeatherEnum.Clouds:
                        return '#464443'
                    case WeatherEnum.Mist:
                        return '#92918d'
                    case WeatherEnum.Rain:
                        return '#3680AA'
                    case WeatherEnum.Snow:
                        return '#cfcbcb'
                    case WeatherEnum.Thunderstorm:
                        return '#9065B0'
                }
            }};
        }
    }
`
