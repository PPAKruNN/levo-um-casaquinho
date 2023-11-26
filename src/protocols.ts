export enum WeatherEnum {
    'Clear' = 'Clear',
    'Clouds' = 'Clouds',
    'Rain' = 'Rain',
    'Snow' = 'Snow',
    'Thunderstorm' = 'Thunderstorm',
    'Drizzle' = 'Drizzle',
    'Mist' = 'Mist',
}

export const WeekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
]

export type Geocode = {
    local_names: {
        pt: string
    }
    lat: number
    lon: number
    country: string
    state?: string
}

export type WeatherForecast = {
    list: Weather[]
    city: WeatherCity
}

export type WeatherCity = {
    id: number
    name: string
    coord: {
        lat: number
        lon: number
    }
    country: string
    timezone: number
}

export type Weather = {
    dt: number
    main: {
        temp: number
        temp_min: number
        temp_max: number
        humidity: number
    }
    wind: {
        speed: number
    }
    weather: {
        id: number
        main: WeatherEnum
        description: string
        icon: string
    }[]
}
