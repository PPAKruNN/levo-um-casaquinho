import styled from 'styled-components'

type InfoBlockProps = {
    title?: string
    desc?: string | number
}

export function InfoBlock(props: InfoBlockProps) {
    return (
        <InfoContent>
            <p>{props.title ?? '--'}</p>
            <h1>{props.desc ?? '--'}</h1>
        </InfoContent>
    )
}

const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    min-width: 200px;
    width: 25vw;
    aspect-ratio: 3;
    padding: 20px;
    gap: 6px;

    border-radius: 24px;

    background-color: #4d4494;

    p {
        color: #fff;
        font-size: 16px;
        font-size: calc(12px + 0.5vw);
        font-weight: 700;
    }

    h1 {
        color: #fff;
        font-size: 48px;
        font-size: calc(32px + 1vw);
        font-weight: 600;
    }
`
