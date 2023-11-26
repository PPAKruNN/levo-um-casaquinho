import axios from 'axios'
import { Geocode, Weather, WeatherForecast } from '../protocols'

const apiUrl = import.meta.env.VITE_API_URL
const apiGeoUrl = import.meta.env.VITE_API_GEO_URL
const appId = import.meta.env.VITE_API_KEY

// TODO: tratar erros dessas funções.

async function GetForecast(lat: number, lon: number): Promise<WeatherForecast> {
    const url = `${apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${appId}&lang=pt`

    const response = await axios.get(url)
    return response.data as WeatherForecast
}

async function GetWeather(lat: number, lon: number): Promise<Weather> {
    const url = `${apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${appId}&lang=pt`

    const response = await axios.get(url)
    return response.data as Weather
}

async function GetGeocodeByName(name: string): Promise<Geocode[]> {
    const url = `${apiGeoUrl}/direct?q=${name}&limit=5&appid=${appId}`

    const response = await axios.get(url)
    return response.data as Geocode[]
}

// async function GetNameByGeocode(lat: number, lon: number) {}

export const ApiService = { GetForecast, GetWeather, GetGeocodeByName }
