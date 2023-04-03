import styled from "@emotion/styled";
import ReactPlayer from "react-player";


export const wrapper__home= styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const wrapper__header= styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    `
export const contents__title=styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;`

export const title= styled.div`  
    color:#55B2E4;
    font-size: 13px;
    font-weight: 700;`

export const subtitle=styled.div` 
    font-size: 8px;
    padding-left: 5px;`

export const divideLine=styled.div`  
    width: 100%;
    border-top: 1px solid gray;`

export const contents__body = styled.div`   
    font-size: 11px;
    color: gray;`
export const wrapper__body = styled.div`   
    width: 100%;
    height: 270px;`

export const video = styled(ReactPlayer)`
    margin-top: 15px;
    width: 240px;
    height: 240px;
    background-color: #c4c4c4;
    border-radius: 10px;
`

