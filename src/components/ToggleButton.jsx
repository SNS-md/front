import styled from "styled-components";

const ToggleButton = styled.button`
    flow:right;
    border: none;
    padding: 5px 10px;
    font-weight: 600;
    user-select: none;
    line-height: 1.5;
    font-size: 1rem;
    flex: 1;
    background-color: #ccc;
    color: white;
    :disabled{
        background-color: var(--main-color900);
    }
`;

export default ToggleButton;