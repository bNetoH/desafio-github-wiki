import styled from "styled-components"

export const ItemRepoContainer = styled.div`
    width: 80%;

    h3 {
        margin-top: 8px;
        font-size: 20px;
    }

    p {
        margin-top: 4px;
        margin-bottom: 16px;
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;

        margin-top: 8px;
        margin-right: 8px;

        border: 1px solid #c2c2cd;
        border-radius: 13px;
        padding: 6px;
    
        &:hover {
            color: #000000;
            background-color: #c2c2cd;
        }
    }

    hr {
        margin-top: 18px;
        margin-bottom: 12px;
    }
    `