import styled from "styled-components";
import Markdown from "./Markdown";
import Comment from "./Comment";
import Writer from "./Writer";
import { Link } from "react-router-dom";

const PostWrapper = styled.article`
  border: 1px solid var(--main-color100);
  margin: 10px;
  padding: 10px;
  :hover {
    box-shadow: 2px 2px 4px var(--main-color100);
  }
`;

function Post({ post, isDetail = false }) {
  if (!isDetail)
    return (
      <Link to={`/detail/${post.id}`}>
        <PostWrapper>
          <Writer name={post.name} date={post.date}/>
          <Markdown contents={post.contents} />
          <hr />
          <Comment comment={post.comment} />
        </PostWrapper>
      </Link>
    );

}

export default Post;