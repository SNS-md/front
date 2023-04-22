import { useState } from 'react';
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
    if (e.key === 'Tab') {  
      e.preventDefault();
      setContents(contents + '\t');
      e.target.value += '\t';
    }
  }

  return (
    <>
      <EditorContiner>
        <PC>
          <PostEditor onChange={onChange} onKeyDown={onKeyDown} placeholder={markdownGuide} />
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