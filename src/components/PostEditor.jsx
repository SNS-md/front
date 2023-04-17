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
  box-shadow: 0 0 5px var(--main-color100);
`;

export default PostEditor;