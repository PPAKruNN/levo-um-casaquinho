export enum WeatherEnum {
    'clear',
    'clouds',
    'rain',
    'snow',
    'thunderstorm',
    'drizzle',
    'mist',
}

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
    weather: {
        id: number
        main: string
        description: string
        icon: string
    }
}
