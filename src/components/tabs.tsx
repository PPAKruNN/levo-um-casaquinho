import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

export function Tabs() {
    const location = useLocation()

    return (
        <TabsContent>
            <Link
                to="/today"
                className={'/today' === location.pathname ? 'selected' : ''}
            >
                Hoje
            </Link>

            <Link
                to="/upcoming"
                className={'/upcoming' === location.pathname ? 'selected' : ''}
            >
                Próximos Dias
            </Link>
        </TabsContent>
    )
}

const TabsContent = styled.span`
    display: flex;
    gap: 72px;

    a {
        text-decoration: none;
        font-size: 38px;
        font-size: calc(16px + 1.5vw);
        color: #c8c8c8;
    }

    & > .selected {
        color: #222222;
    }
`
