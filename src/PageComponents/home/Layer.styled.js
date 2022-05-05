import styled from "styled-components";


export const Service = styled.div`
    text-align:center;
    padding:5rem;
    /* min-height:30rem; */

`

export const Grid = styled.div`

    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(2,1fr);


    .grid-item{
        padding:2rem;
    }

`