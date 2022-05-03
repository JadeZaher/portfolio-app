import styled from "styled-components";

export const Slider = styled.div`

    overflow: hidden;
    align-items:center;
    display: flex;
    flex-direction: column;
    align-content: center;

    transform: translateY(${(props) => props.yTranslate});
    transition: .25s;

`