import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 80px;
    background: ${({primary})=>(primary ? '#01BF71' : '#010606' )};
    white-space: nowrap;
    padding: ${({big})=>(big ?'20px 64px':'14px 48px')};
    color: ${({dark})=>(dark ? "#010606":"#fff")};
    font-size: ${({fontBig})=>(fontBig ? '30px':'25px')};
    border: none;
    outline: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? '#fff':'#01BF71')};
    }

`