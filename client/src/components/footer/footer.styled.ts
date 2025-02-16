import styled from 'styled-components'
import { generalTheme } from '../../theme/theme'

export const Container = styled.div`
    height: ${() => `${generalTheme.footerHeight}px`};
    border: 1px solid black;
    p {
        margin: 15px 20px;
        font-size: 0.8rem;
        font-weight: 400;
        color: #666;
    }
`