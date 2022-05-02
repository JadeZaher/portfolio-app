import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    transform: translateY(-10%);
    height:60%;
    width: 50vw;
    margin: 2rem 2rem;
    overflow: hidden;
    background-color: white;
    box-shadow  : 0 6px 12px rgba(128, 255, 0, .8);
    border: .2px solid black;
    border-radius: 1em;
    text-align: center;
    
    .overlay{
        background-color: rgba(0, 0, 0, .5);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        h1{
        font-size: 2.2rem;
        padding: 0 0 2vh 2vh;
        color: #ffff;
        }   
    }
    
    .item{
        height:40vh;
        width:100%;
        overflow: hidden;
        object-fit: cover;
        background-position: center;
        background-size: cover;
        background-image  : url(${({imgsrc})=>imgsrc});

    }

    h1{
        font-size: 1.2rem;
        padding: 0 0 2vh 2vh;
    }

    p{
        width: 45vw;
        padding-right: 3%;
        padding-left: 3%;
        padding-top: 3%;
    }

    @media (max-width: 820px) {
 

        width: 80vw;
        font-size: .8rem;

        p{
            width: auto;
        }
        
    }
`