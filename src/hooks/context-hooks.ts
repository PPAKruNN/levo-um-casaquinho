import { useContext } from 'react'
import { WeatherContext } from '../contexts/weather-context'

const useWeather = () => {
    const context = useContext(WeatherContext)

    return context
}

export { useWeather }
