import { styled } from 'styled-components'

const Container = styled.section`
    border: 4px solid;
    margin: 30px 30px 0 30px;
    border-color: ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.background};
    border-radius: 10px;
    height: 35rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 10rem;
        color: ${(props) => props.theme.fonts};
    }
`

export default {
    Container,
}