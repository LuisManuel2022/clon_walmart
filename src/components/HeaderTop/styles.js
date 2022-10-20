import styled from "styled-components";          
import { BsHeadphones } from 'react-icons/bs'

export const Container = styled.header`
  width: 100vm;
  height: 41px;
  display: flex;
  background-color: #005cb5;
  span{
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
    line-height: 18.4px;
    font-family: BogleWeb, Montserrat, sans-serif;
    
  }
  .how{
    width: 11.5%;
    display: flex;
    margin-left: 113px;
    margin-top: 11px;
    box-sizing: border-box;
    text-align: left;
    justify-content: start;
    align-items: stretch;
    font-family: BogleWeb,Montserrat,sans-serif;
    font-size: 1rem;
    font-wight: 400;
    text-transform: none;
    letter-spacing: 0;
    line-height: 18.4px;
    img{
        width: 19px;
        height: 19px;
        margin-right: 5px;
    }
  }
  .contact{
    width: 83%;
    display: flex;
    margin-top: 11px;
    box-sizing: border-box;
    text-align: left;
    justify-content: start;
    align-items: stretch;
    font-family: BogleWeb,Montserrat,sans-serif;
    font-size: 13px;
    font-wight: 400;
    text-transform: none;
    letter-spacing: 0;
    line-height: 18.4px;
  }

`;

export const HeadPhone = styled(BsHeadphones)`
  color: white;
  width: 20px;
  height: 20px;
  margin-right: 4px;

`


