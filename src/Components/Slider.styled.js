import styled from "styled-components";

export const Slider = styled.div`

    overflow: hidden;
    overflow-y: hidden;
    align-items:center;
    display: flex;
    flex-direction: column;
    align-content: center;

    transform: translateY(${(props) => props.yTranslate});
    transition: .35s;

`