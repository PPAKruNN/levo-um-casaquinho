import { WeatherProvider } from './weather-context'

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    return <WeatherProvider>{children}</WeatherProvider>
}
