import { useState } from 'react';
import { writePost } from '../utils/testApi';
import { useNavigate } from 'react-router-dom';
import PostEditor from '../components/PostEditor';
import EditorContiner from '../components/EditorContiner';
import Markdown from '../components/Post/Markdown';
import markdownGuide from '../utils/markdownGuide';

function Write() {
  const [contents, setContents] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setContents(e.target.value);
  }

  const onClick = async () => {
    try{
      const id = await writePost(contents);
      navigate("/detail/"+id);
    }catch(e){
      alert("게시물 작성에 실패했습니다.");
    }
  }

  return (
    <>
      <EditorContiner>
        <PostEditor onChange={onChange} placeholder={markdownGuide}/>
        <Markdown contents={contents}/>
      </EditorContiner>
      <button onClick={onClick}>작성</button>
    </>
  );
}
  
export default Write;