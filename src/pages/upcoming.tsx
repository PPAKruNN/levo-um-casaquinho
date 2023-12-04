import styled from 'styled-components'
import { Tabs } from '../components/tabs'
import { CityDisplay } from '../components/city-display'
import { WeatherChart } from '../components/weather-chart'
import { useWeather } from '../hooks/context-hooks'

export function Upcoming() {
    const { forecast } = useWeather()

    return (
        <UpcomingPage>
            <Tabs />

            {!forecast ? (
                <h1>
                    Você ainda não selecionou uma cidade! Faça uma pesquisa na
                    barra de pesquisa ao lado!
                </h1>
            ) : (
                <div>
                    <CityDisplay />
                    <WeatherChart />
                </div>
            )}

            <p>
                Dados fornecidos pela{' '}
                <a target="_blank" href="https://openweathermap.org/">
                    Open Weather API
                </a>
            </p>
        </UpcomingPage>
    )
}

const UpcomingPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    box-sizing: border-box;

    width: 65%;
    height: 100vh;

    padding: 32px 48px;

    background-color: #efefef;

    & > div {
        display: flex;
        flex-direction: column;

        gap: 48px;

        width: 100%;
        height: 70%;

        div:nth-of-type(2) {
            padding: 32px 16px 32px 0px;

            border: 1px solid #d8d8d8;

            background-color: #ffffff;
        }
    }

    & > span {
        font-size: 16px;
        font-size: calc(16px + 0.2vw);
        color: #afadad;
    }

    p {
        font-size: 16px;
        font-size: calc(16px + 0.2vw);

        a {
            cursor: pointer;
            text-decoration: none;
            color: #96a7f2;
        }
    }

    section {
        display: flex;
        flex-wrap: wrap;
        gap: 2vw 3.5vw;
    }

    @media (max-width: 800px) {
        width: 100%;
        padding: 64px 5%;
        box-sizing: border-box;

        gap: 48px;
    }
`
