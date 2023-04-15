import styled from "styled-components";
import name2profile from "../../utils/name2profile";

const PostHeaderSection = styled.section`
  display: flex;
  justify-content: start;
  gap: 5px;
  align-items: center;
`;

const ProfileImg = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

function PostHeader({ name, date }) {
    const [color, icon] = name2profile(name);
    return (
        <PostHeaderSection>
            <ProfileImg color={color}>{icon}</ProfileImg>
            <b>{name}</b>
            <span style={{color:"#666"}}>·</span>
            <span style={{color:"#666"}}>{date}</span>
        </PostHeaderSection>
    );
}

export default PostHeader;