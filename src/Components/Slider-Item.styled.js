import styled from "styled-components";

export const SliderItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    
    height:100vh;
    width: 100%;    
    background-color: white;
    box-shadow  : 0 6px 12px rgba(128, 255, 0, .8);
    border: .2px solid black;
    text-align: center;

    .overlay{
        background-color: rgba(0, 0, 0, .6);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        h1{
        font-size: 1.2rem;
        padding: 0 0 .5vh .5vh;
        color: #ffff;
        }   
    }
    
    .item{
        backdrop-filter: blur(5px);
        height:100%;
        width:100%;
        overflow: hidden;
        object-fit: cover;
        background-position: center;
        background-size: cover;
        background-image  : url(${({imgsrc})=>imgsrc});

    }
    .modal{
        overflow: visible;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: .65s;
        position: absolute;
        background-color: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-content: center;
        img{
            height: 45vh;
        }
        p{
            width: 40vw;
            text-align: justify;
            color: black;
        }
    }

    p{
        color: #fff;
        width: 45vw;
        padding-right: 3%;
        padding-left: 3%;
        padding-top: 3%;
    }

    @media (max-width: 820px) {
 

        font-size: .8rem;
        .modal{
            Img{
                width: 80vw;
                object-fit: cover;
                overflow: hidden;
            }
            p{
                width: 80vw;
            }
            
        }
    }
`