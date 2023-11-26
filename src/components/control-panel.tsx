import styled from 'styled-components'
import logo from '../assets/casaco.svg'
import { CitySearch } from './city-search'
import { WeatherDisplay } from './weather-display'
import { WeatherEnum } from '../protocols'
import { DateDisplay } from './date-display'
import { Settings } from './settings'

export function ControlPanel() {
    return (
        <AsideBar>
            <header>
                <img src={logo} alt="Levo um casaquinho's logo" />
                <span>
                    <h1>Levo um</h1>
                    <h1>casaquinho?</h1>
                </span>
            </header>

            <CitySearch />

            <WeatherDisplay weather={WeatherEnum.mist} />

            <DateDisplay />

            <Settings />

            <p>Todos os direitos reservados. 2023.</p>
        </AsideBar>
    )
}

const AsideBar = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 35%;
    height: 100%;
    padding: 32px 5%;
    box-sizing: border-box;

    background-color: #ffffff;

    header {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        gap: 16px;

        img {
            width: 112px;
            width: 6vw;
        }

        span {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: unset;
        }

        h1 {
            font-size: 52px;
            font-size: 2.5vw;
            font-weight: 600;
        }
    }

    p {
        text-align: center;
        font-size: 22px;
        font-size: calc(12px + 0.5vw);
    }
`
