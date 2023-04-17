import styled from "styled-components";

const EditorContiner = styled.article`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 10px;
  >*{
    flex: 1 1 0px;
  }
`;

export default EditorContiner;