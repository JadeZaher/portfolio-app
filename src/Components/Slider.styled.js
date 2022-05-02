import styled, {css} from "styled-components";

export const Slider = styled.div`




    align-items:center;
    display: flex;
    flex-direction: column;
    align-content: center;

    

      transform: translateY(${(props)=>props.scroll+'%'});
    

`