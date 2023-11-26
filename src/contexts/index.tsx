import { UnitProvider } from './unit-context'
import { WeatherProvider } from './weather-context'

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WeatherProvider>
            <UnitProvider>{children}</UnitProvider>
        </WeatherProvider>
    )
}
