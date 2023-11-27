import { createContext, useState } from 'react'
import { ApiService } from '../services/api'
import { Geocode, Weather, WeatherForecast } from '../protocols'
import { toast } from 'react-toastify'

const WeatherContext = createContext<
    | {
          updateLocation: (geocode: Geocode) => Promise<void>
          searchForCity: (cityName: string) => Promise<Geocode[] | undefined>
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
        try {
            const forecast = await ApiService.GetForecast(lat, lon)
            setForecast(forecast)
        } catch (error) {
            toast.error(
                'Houve um erro desconhecido ao atualizar os dados da previsão climática!'
            )
        }
    }

    async function updateWeather(lat: number, lon: number) {
        try {
            const weather = await ApiService.GetWeather(lat, lon)
            setWeather(weather)
        } catch (error) {
            toast.error(
                'Houve um erro desconhecido ao atualizar os dados do clima de hoje!'
            )
        }
    }

    async function searchForCity(cityName: string) {
        try {
            const options = await ApiService.GetGeocodeByName(cityName)
            return options
        } catch (error) {
            toast.error('Houve um erro desconhecido ao pesquisar pela cidade.')
        }
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
