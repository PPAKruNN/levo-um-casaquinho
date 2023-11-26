import styled from 'styled-components'
import { Tabs } from '../components/tabs'
import { CityDisplay } from '../components/city-display'
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

const mockData = [
    { x: -1, y: 180 },
    { x: 1, y: 2 },
    { x: 2, y: 10 },
    { x: 3, y: 30 },
    { x: 4, y: 100 },
    { x: 5, y: 180 },
]

export function Upcoming() {
    return (
        <TodayPage>
            <Tabs />

            <div>
                <CityDisplay />
                <ResponsiveContainer width="95%" height="50%">
                    <LineChart
                        width={500}
                        height={300}
                        data={mockData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid stroke="#F5F5F5" />
                        <XAxis dataKey="x" />
                        <YAxis />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#EFEFEF',
                                borderRadius: '5px',
                                border: 'none',
                            }}
                            labelStyle={{ color: '#000000' }}
                        />
                        <Line type="monotone" dataKey="y" stroke="#4d4494" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

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
            color: #96a7f2;
        }
    }

    section {
        display: flex;
        flex-wrap: wrap;
        gap: 2vw 3.5vw;
    }
`
