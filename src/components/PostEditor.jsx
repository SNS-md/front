import styled from 'styled-components';

const PostEditor = styled.textarea`
  resize: none;
  outline: none;
  font-size: 1rem;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid var(--main-color100);

  @media (max-width: 600px) {
    width: 100%;
    min-height: 600px;
  }
`;

export default PostEditor;