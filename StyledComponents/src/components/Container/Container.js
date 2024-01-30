import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #9EBBF0;
`

export const ContainerCount = styled.View`
    border-color: #A1C3ED ;
    background-color: white;
    border-width: 2;
    align-items: center;
    flex-direction: column;
    width: 90%;
    border-radius: 10px;
    margin: 5px;

`

export const ContainerIncDec = styled(ContainerCount)`
    flex-direction: row;
    justify-content: space-evenly;
    border-color:white;
`
