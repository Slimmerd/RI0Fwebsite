import React from 'react'
import styled from "styled-components";
import img from '../../../../../assets/r6mg.jpg'

const CardShape = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
   
    text-align: center;

    height: 430.43px;
    width: 322.82px;
    border-radius: 12px;
    background: transparent;
    color: #1A1E22;

    
   
   
`

const PcitureDiv = styled.div`
  
  margin-top: 21.34px;
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 322.82px;
  height: 322.82px;
  background-image: url(${img});
  border-radius: 7.4212px;
  
  
   box-shadow: 26.8756px 21.5274px 68.8687px rgba(0, 0, 0, 0.07), 17.4194px 13.9529px 40.3328px rgba(0, 0, 0, 0.0531481), 10.3521px 8.29202px 21.936px rgba(0, 0, 0, 0.0425185), 5.37511px 4.30547px 11.1912px rgba(0, 0, 0, 0.035), 2.18986px 1.75408px 5.61152px rgba(0, 0, 0, 0.0274815), 0.497696px 0.398655px 2.71011px rgba(0, 0, 0, 0.0168519);

`

const TextDiv = styled.div`
    padding-top: 25.98px;

    font-weight: 500;
    font-size: 55.0949px;
    line-height: 65px;


    color: #2C3E50;
`


//TODO: Custom Date, Header, Text


export const TeamCard = () => {
    return (
        <CardShape>
            <PcitureDiv/>
            <TextDiv>R6MG</TextDiv>
        </CardShape>


    )

}
