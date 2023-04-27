import styled from "styled-components";

const Button = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--main-color900);
    color: white;
    border: none;
    display: block;
    margin-left: auto;
    :disabled{
        cursor: not-allowed;
        background-color: #ccc;
    }
`;

export default Button;