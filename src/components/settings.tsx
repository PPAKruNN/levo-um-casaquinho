import React from 'react'
import ReactSwitch from 'react-switch'
import styled from 'styled-components'

type SettingsProps = {
    unit: string
    setUnit: React.Dispatch<React.SetStateAction<string>>
}

export function Settings(props: SettingsProps) {
    function handleCelsiusToFahrenheit() {
        if (props.unit == 'F') return props.setUnit('C')
        return props.setUnit('F')
    }

    return (
        <SettingsContent>
            <label>
                <ReactSwitch
                    checked={props.unit == 'F'}
                    onChange={handleCelsiusToFahrenheit}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor="#E9E9EA"
                    onColor="#5BC236"
                />
                <span>F°</span>
            </label>
        </SettingsContent>
    )
}

const SettingsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;

    font-weight: 400;
    font-size: 24px;
    font-size: calc(12px + 0.5vw);

    label {
        display: flex;
        align-items: center;
        gap: 12px;
    }
`
