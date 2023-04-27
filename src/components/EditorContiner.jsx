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

  @media (max-width: 600px) {
    display: block;
    &.editor{
      >textarea{
        display: block;
      }
      >article{
        display: none;
      }
    }
    &.preview{
      >textarea{
        display: none;
      }
      >article{
        display: block;
      }
    }
  }
`;

export default EditorContiner;