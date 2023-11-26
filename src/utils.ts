export function KelvinToUnit(kelvin: number, unit: string): number {
    if (unit == 'C') return Math.ceil(kelvin - 273.15)
    return Math.ceil(kelvin * 1.8 - 459.67)
}
