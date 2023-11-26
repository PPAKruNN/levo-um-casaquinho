import styled from 'styled-components'
import { Tabs } from '../components/tabs'
import { CityDisplay } from '../components/city-display'
import { InfoBlock } from '../components/info-block'

export function Today() {
    return (
        <TodayPage>
            <Tabs />

            <div>
                <CityDisplay />
                <section>
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                </section>
            </div>

            <span>Não, você não deve levar um casaquinho</span>

            <p>
                Dados fornecidos pela <a>Open Weather API</a>
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
            color: #96a7f2;
        }
    }

    section {
        display: flex;
        flex-wrap: wrap;
        gap: 2vw 3.5vw;
    }
`