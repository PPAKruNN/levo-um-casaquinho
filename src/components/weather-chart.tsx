import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from 'recharts'
import { KelvinToUnit } from '../utils'
import { useUnit, useWeather } from '../hooks/context-hooks'
import dayjs from 'dayjs'
import { WeekDays } from '../protocols'
import {
    NameType,
    ValueType,
} from 'recharts/types/component/DefaultTooltipContent'
import styled from 'styled-components'

export function WeatherChart() {
    const { forecast } = useWeather()
    const { unit } = useUnit()

    function genData() {
        if (!forecast || !forecast.list) return
        const list = forecast?.list

        console.log(list)

        return list.map((curr) => {
            const date = dayjs
                .unix(curr.dt)
                .utcOffset(forecast.city.timezone / 60)

            return {
                x: `${date.format('DD/MM')} (${WeekDays[date.weekday()]})`,
                y: KelvinToUnit(curr.main.temp, unit),
            }
        })
    }

    return (
        <ResponsiveContainer width="95%" height="50%">
            <LineChart
                width={500}
                height={300}
                data={genData()}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid stroke="#F5F5F5" />
                <XAxis dataKey="x" />
                <YAxis tickFormatter={(num) => `${num}°${unit}`} />
                <Tooltip
                    content={<CustomTooltip />}
                    formatter={(num) => `${num}°${unit}`}
                />

                <Line type="monotone" dataKey="y" stroke="#4d4494" />
            </LineChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({
    active,
    payload,
    label,
}: TooltipProps<ValueType, NameType>) => {
    const { unit } = useUnit()

    if (active) {
        return (
            <CustomTooltipSC>
                <p>{label}</p>
                <p>
                    {payload?.[0].value}°{unit}
                </p>
            </CustomTooltipSC>
        )
    }

    return null
}

const CustomTooltipSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: center;

    box-sizing: border-box;
    padding: 12px;

    border-radius: 5px;

    background-color: #efefef;

    p {
        color: #000000;
        font-size: 16px;
    }

    p:nth-of-type(2) {
        color: #4d4494;
    }
`
