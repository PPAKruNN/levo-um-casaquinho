import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import utc from 'dayjs/plugin/utc'
import styled from 'styled-components'
import { WeekDays } from '../protocols'

dayjs.extend(utc)
dayjs.extend(weekday)

type DateDisplayProps = {
    utcNow?: number
    shift?: number
}

export function DateDisplay(props: DateDisplayProps) {
    let date

    if (props.utcNow == undefined || props.shift == undefined) date = dayjs()
    else date = dayjs.unix(props.utcNow).utcOffset(props.shift / 60)

    return (
        <DisplayContent>
            <h3>{date.format('DD/MM/YYYY')}</h3>
            <h3>
                {WeekDays[date.weekday()]}, {date.format('HH:mm')}
            </h3>
        </DisplayContent>
    )
}

const DisplayContent = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    font-size: calc(12px + 0.5vw);
`
