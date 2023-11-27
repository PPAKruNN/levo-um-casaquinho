import styled from 'styled-components'
import { Tabs } from '../components/tabs'
import { CityDisplay } from '../components/city-display'
import { InfoBlock } from '../components/info-block'
import { useUnit, useWeather } from '../hooks/context-hooks'
import { KelvinToUnit } from '../utils'

export function Today() {
    const { weather } = useWeather()
    const { unit } = useUnit()

    return (
        <TodayPage>
            <Tabs />

            {!weather ? (
                <h1>
                    Você ainda não selecionou uma cidade! Faça uma pesquisa na
                    barra de pesquisa ao lado!
                </h1>
            ) : (
                <>
                    <div>
                        <CityDisplay />
                        <section>
                            <InfoBlock
                                title="Mínima"
                                desc={`${KelvinToUnit(
                                    weather?.main.temp_min ?? 0,
                                    unit
                                )}° ${unit}`}
                            />
                            <InfoBlock
                                title="Máxima"
                                desc={`${KelvinToUnit(
                                    weather?.main.temp_max ?? 0,
                                    unit
                                )}° ${unit}`}
                            />
                            <InfoBlock
                                title="Umidade"
                                desc={`${weather?.main.humidity}%`}
                            />
                            <InfoBlock
                                title="Velocidade do vento"
                                desc={`${weather?.wind.speed} m/s`}
                            />
                        </section>
                    </div>

                    <span>
                        {weather?.main.temp > 290.15 ||
                        weather?.main.temp_max > 290.15 ||
                        weather?.main.temp_min > 290.15
                            ? 'Não, você não deve levar um casaquinho'
                            : 'Você deve levar um casaquinho'}
                    </span>
                </>
            )}

            <p>
                Dados fornecidos pela{' '}
                <a target="_blank" href="https://openweathermap.org/">
                    Open Weather API
                </a>
            </p>
        </TodayPage>
    )
}

const TodayPage = styled.div`
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
`
