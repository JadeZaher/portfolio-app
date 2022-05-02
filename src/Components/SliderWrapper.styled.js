import styled from "styled-components";

export const SliderWrapper = styled.div`
    .more{

        border-radius:  1rem 1rem 2rem 2rem ;
        margin-top: 2vh;
        border-bottom: 3px;
        
    }

    button{
        color: white;
        background-color: chartreuse;
        opacity: .5;
        padding: 2rem 4rem;

        align-items: center;
        justify-content: center;
        z-index:5;
        display: flex;

        filter:drop-shadow(0 0 .8rem chartreuse);
        position: fixed;
        left: 45%;

    }
    :hover button{
        opacity: .8;
    }

    display: flex;
    flex-direction: column;
    align-content: center;
    overflow: hidden;

    @media (max-width: 768px) {
        button{
            left: 30%;
        }
    }
`