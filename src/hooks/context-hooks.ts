import { useContext } from 'react'
import { WeatherContext } from '../contexts/weather-context'

const useWeather = () => {
    const context = useContext(WeatherContext)

    // This is needed for typescript typesafety, we are checking if context is not undefined.
    if (!context) throw Error('Undefined context WeatherContext')

    return context
}

export { useWeather }
