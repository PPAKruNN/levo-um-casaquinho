import React, { createContext, useState } from 'react'

const UnitContext = createContext<
    | {
          unit: string
          setUnit: React.Dispatch<React.SetStateAction<string>>
      }
    | undefined
>(undefined)

function UnitProvider({ children }: { children: React.ReactNode }) {
    const [unit, setUnit] = useState('C')

    return (
        <UnitContext.Provider value={{ unit, setUnit }}>
            {children}
        </UnitContext.Provider>
    )
}

export { UnitProvider, UnitContext }
