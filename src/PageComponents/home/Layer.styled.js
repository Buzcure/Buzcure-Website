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

    .btn{
        margin-top:4rem;
    }

    
`

export const List = styled.div`

    ul{
        text-decoration:none;
        margin:0;
        margin-top:4rem;

        

        li{
            display:flex;
            list-style:none;
            margin: 2rem 0;

            p{
                margin-left:1.5rem;
            }
        }
    }

`


export const Masonry = styled.div`
`

export const Mission = styled.section`
 
  padding:5rem 0;
  background:#F3F8FE;
  text-align:center;

  .wrap{
      width:90%;
      margin: 7rem auto;
  }

  .img-container{
      margin: 6rem 0;
  }
`

export const Modal = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;

 padding: 3rem 0rem;
 /* border-radius:.7rem; */
 /* box-shadow:0px 9.25117px 18.5023px 9.25117px #F6F6F6; */

.modal-img{
    background:#E5F9F4;
    border-radius:50%;
    padding:.7rem !important;
    margin-bottom:2rem;
    box-shadow:0px 9px 17px 0px rgba(21, 34, 58, .13) ;

}

 .modal-text{
     margin-left:1.5rem;
     text-align:center;
     
     h4{
         margin-bottom:1rem;
        
     }

     
 }
`


export const Banner = styled.section`
 width:100%;
 height:60vh;
 background:url('/images/banner.jpg');
 background-size:cover;
 text-align:center;

 position:relative;

 .wrap{
    width:80%;
    margin:auto;
    color:#fefefe;

    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    p{
        margin:4rem 0;
    }

 }

`

export const Header = styled.div`
text-align:center;
`

export const Product = styled.div`
    width:80%;
    margin:7rem auto;
    
`