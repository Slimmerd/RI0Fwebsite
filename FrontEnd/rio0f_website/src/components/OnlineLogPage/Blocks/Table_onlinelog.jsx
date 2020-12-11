import React from 'react';
import styled from "styled-components";


const TableDiv = styled.div`
  iframe{
  margin: 50px 0 50px 0;
  width: 1110px;
  min-height: 550px;
  border: 1px solid #2C3E50;
  border-radius: 5px;
  }
  
  @media (max-width: 1200px){
    iframe{
    width: 768px;
    }
}

@media (max-width: 992px){
  iframe{
    width: 678px;
    }
}

@media (max-width: 768px){
  iframe{
    width: 500px;
    }
}

@media (max-width: 576px){
  iframe{
    width: 375px;
    }
  
}

@media (max-width:375px){
  iframe{
    width: 280px;
    }
}
`

export const OnlineLogTable = () => {
    return (
            <TableDiv>
            <div className={'container'}>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSElFjNpjtaSMuhZKVP1Rtd2BMw5s_jj4uo7Vy-WNGDHIa1W1__OVrm-D6WOsCRVsp2UkET9E4TbneQ/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>
            </TableDiv>
    );
};


