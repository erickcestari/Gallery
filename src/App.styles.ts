import styled from "styled-components";


export const Container = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #264653;
    color: #2a9d8f;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom:30px;
`

export const ScreenWarning = styled.div`
    text-align: center;
    font-weight: 500;
    .emoji{
        font-size: 80px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const UploadForm = styled.form`
    background: #2a9d8f;
    color: #264653;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit]{
        background: #756df4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover{
            opacity: .8;
        }
    }
`