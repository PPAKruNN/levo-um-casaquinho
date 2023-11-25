import ReactSwitch from 'react-switch'
import styled from 'styled-components'

export function Settings() {
    return (
        <SettingsContent>
            <label>
                <ReactSwitch
                    checked={false}
                    onChange={() => {}}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor="#E9E9EA"
                    onColor="#5BC236"
                />
                <span>F°</span>
            </label>
            <label>
                <ReactSwitch
                    checked={false}
                    onChange={() => {}}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor="#E9E9EA"
                    onColor="#5BC236"
                />
                <span>Dark mode</span>
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
