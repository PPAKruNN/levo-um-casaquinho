import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { MainStyle, ResetStyle } from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import { ControlPanel } from './components/control-panel'
import { GlobalProvider } from './contexts'

function App() {
    const location = useLocation()
    if (location.pathname === '/') Navigate({ to: '/today', replace: true })

    return (
        <GlobalProvider>
            <MainStyle />
            <ResetStyle />
            <ToastContainer />

            <Content>
                <ControlPanel />
                <Outlet />
            </Content>
        </GlobalProvider>
    )
}

const Content = styled.div`
    height: 100vh;
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;

        & > aside {
            height: 100vh;
            width: 100vw;
        }

        & > div:first-child {
            height: 100vh;
            width: 100vw;
        }
    }
`

export default App
