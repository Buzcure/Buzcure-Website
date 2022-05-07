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
    /* width:90%; */
    margin:7rem auto;
    background:#F8F8F7;

    .wrap{
        width:90%;
        margin:auto;
        padding:4rem 0;

        .item{
            margin-bottom:2rem;
            padding:2rem 2rem;
            background:#fefefe;
            box-shadow: 3.50746px 3.50746px 3.50746px rgba(0, 0, 0, 0.1);

            h3{
                margin-bottom:2rem;
                font-weight:bold;

                &::after{
                    content:'';
                    width:25px;
                    height:1px;
                    background:#C4C4C4;
                    display:block;
                    margin-top:1rem;

                }
            }

            p{
                width: 80%;
                line-height: 1.9;
            }
        }
    }

    
`


export const GridBand = styled.section`


    .wrap{
        width:90%;
        margin:auto;


        .grid-item{
            height:40rem;
            margin-bottom:2.5rem;
            

            h3{
                padding:2rem;
                font-weight:bold;
                font-size:2.3rem;
                color:#fefefe;
            }
            
        }

        .item-1{
            background:url('/images/banner.jpg');
        }

        .item-2{
            background-image: url('/images/lady-in-shop.jpg');
            background-size:cover;
            background-position:center;
        }

        .item-3{
            background:url('/images/meeting.jpg');
            background-size:cover;
        }


    }

`


export const Program = styled.section`
    padding:4rem 0;

    .title{
 
           text-align:center;
           margin-bottom:6rem;
          
        }

    .program-wrap{
        width:80%;
        margin:auto;
        
        
        
        .program-item{

            margin: 4rem 0;
            h2{
                font-size:1.5rem;
                text-transform:uppercase;
                margin-bottom:2rem;

                &::after{
                    content:'';
                    width:100%;
                    height:1px;
                    background:#333;
                    display:block;
                    margin-top:1rem;
                }
            }

            .icon{
                text-align:center;
                margin:1rem 0;
            }
            
            p{
                width: 80%;
                /* line-height: 1.9; */
                margin:1rem 0;
            }

            a{
                font-weight:bold;
            }
        }
    }
`