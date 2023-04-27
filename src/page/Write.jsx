import { useRef, useState } from 'react';
import { writePost } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import PostEditor from '../components/PostEditor';
import EditorContiner from '../components/EditorContiner';
import Markdown from '../components/Post/Markdown';
import markdownGuide from '../utils/markdownGuide';
import PostWrapper from '../components/Post/PostWrapper';
import Tab from '../components/Tab';
import Button from '../components/Button';
import Loading from '../components/Loading';

function Write() {
  const [contents, setContents] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState("editor");
  const navigate = useNavigate();

  const taRef = useRef(); // textarea에 ref 연결

  const onChange = (e) => {
    setContents(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = (e.target.scrollHeight + 8) + "px";
  }

  const onClick = async () => {
    setIsLoading(true);
    try {
      const response = await writePost(contents);
      navigate("/detail/" + response.id);
    } catch (e) {
      alert("게시물 작성에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  }

  const onKeyDown = e => {
    if (e.keyCode !== 9)
      return;
    e.preventDefault();
    const value = e.target.value;
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    e.target.value = value.substring(0, start) + "    " + value.substring(end);
    onChange(e);
    taRef.current.setSelectionRange(start+4, start+4);
  }

  return (
    <>
      <Tab tabs={[{type:"editor",title:"작성하기"},{type:"preview",title:"미리보기"}]} tab={tab} setTab={setTab} />
      <EditorContiner className={tab}>
          <PostEditor onChange={onChange} onKeyDown={onKeyDown} ref={taRef} placeholder={markdownGuide} />
          <PostWrapper>
            <Markdown contents={contents} />
          </PostWrapper>
      </EditorContiner>
      <Button onClick={onClick} disabled={isLoading||contents.length<6} bold={true}>
        {isLoading?<Loading size="23px"/>:"작성"}
      </Button>
    </>
  );
}

export default Write;