import { useEffect, useRef, useState } from 'react';
import { writePost } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import PostEditor from '../components/PostEditor';
import EditorContiner from '../components/EditorContiner';
import Markdown from '../components/Post/Markdown';
import markdownGuide from '../utils/markdownGuide';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)"
  });

  return <>{isMobile && children}</>
}

const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:601px)"
  });

  return <>{isPc && children}</>
}

function Write() {
  const [contents, setContents] = useState('');
  const navigate = useNavigate();
  const [key, setKey] = useState('write');

  const [cursor, setCursor] = useState(0); //탭 입력 후 커서의 위치
  const taRef = useRef(); // textarea에 ref 연결

  useEffect(() => {
    taRef.current.setSelectionRange(cursor, cursor);
  }, [cursor]);

  const onChange = (e) => {
    setContents(e.target.value);
  }

  const onClick = async () => {
    try {
      const response = await writePost(contents);
      navigate("/detail/" + response.id);
    } catch (e) {
      alert("게시물 작성에 실패했습니다.");
    }
  }

  const onKeyDown = e => {
    if (e.keyCode === 9) {  
      e.preventDefault();
      let value = e.target.value,
        start = e.target.selectionStart,
        end = e.target.selectionEnd;
      setContents(value.substring(0, start) + "\t" + value.substring(end));
      setCursor(start + 1);
      e.target.value = value.substring(0, start) + "  " + value.substring(end);
    }
  }

  return (
    <>
      <EditorContiner>
        <PC>
          <PostEditor onChange={onChange} onKeyDown={onKeyDown} ref={taRef} placeholder={markdownGuide} />
          <Markdown contents={contents} />
        </PC>
        <Mobile>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="write" title="Write">
              <PostEditor onChange={onChange} placeholder={markdownGuide} />
            </Tab>
            <Tab eventKey="profile" title="Preview">
              <Markdown contents={contents} />
            </Tab>
          </Tabs>
        </Mobile>
      </EditorContiner>
      <button onClick={onClick}>작성</button>
    </>
  );
}

export default Write;