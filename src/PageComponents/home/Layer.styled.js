import styled from "styled-components";


export const Service = styled.div`  
    width:80%;
    text-align:center;
    /* padding:5rem; */
    margin:7rem auto;
    /* min-height:30rem; */

    h2{
        margin-bottom:5rem;
    }

    h3{
        margin-top:2rem;
        margin-bottom:2rem;
        color:#54BB6A;
        text-transform:uppercase;
    }

`

export const Grid = styled.div`

    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(2,1fr);
    grid-gap:1.7rem;

    margin:auto;

    .active{
        background: #2C635D;
        color:#fefefe;
    }


    .grid-item{
        padding:2rem 4rem;
        border-radius:.7rem;
        box-shadow: 5px 15px 25px 10px rgba(39, 68, 69, 0.1);

        p{
            margin-top:1rem;
        }
    }

`

export const ServiceOption = styled.section`
     width:80%;
    text-align:center;
    margin:7rem auto;

    
`