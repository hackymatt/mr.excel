import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'rgb(2, 116, 56)' : '#fff')};
    // white-space: nowrap;
    padding: ${({big}) => (big ? '14p 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-align: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : 'rgb(2, 116, 56)' )};
        color: ${({dark}) => (dark ? 'rgb(2, 116, 56)' : '#fff')};
    }
`;