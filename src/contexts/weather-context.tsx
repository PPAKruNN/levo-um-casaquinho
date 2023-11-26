import { createContext, useState } from 'react'
import { ApiService } from '../services/api'
import { Geocode, Weather, WeatherForecast } from '../protocols'

const WeatherContext = createContext<
    | {
          updateLocation: (geocode: Geocode) => Promise<void>
          searchForCity: (cityName: string) => Promise<Geocode[]>
          forecast?: WeatherForecast
          weather?: Weather
          geocode?: Geocode
      }
    | undefined
>(undefined)

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
    const [forecast, setForecast] = useState<WeatherForecast>()
    const [weather, setWeather] = useState<Weather>()
    const [geocode, setGeocode] = useState<Geocode>()

    async function updateLocation(geocode: Geocode) {
        await updateForecast(geocode.lat, geocode.lon)
        await updateWeather(geocode.lat, geocode.lon)

        setGeocode(geocode)
    }

    async function updateForecast(lat: number, lon: number) {
        const forecast = await ApiService.GetForecast(lat, lon)

        setForecast(forecast)
    }

    async function updateWeather(lat: number, lon: number) {
        const weather = await ApiService.GetWeather(lat, lon)

        setWeather(weather)
    }

    async function searchForCity(cityName: string) {
        const options = await ApiService.GetGeocodeByName(cityName)

        return options
    }

    return (
        <WeatherContext.Provider
            value={{
                updateLocation,
                searchForCity,
                forecast,
                weather,
                geocode,
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherProvider, WeatherContext }
