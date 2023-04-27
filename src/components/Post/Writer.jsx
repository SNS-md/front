import styled from "styled-components";
import { name2profile } from "../../utils/name";

const PostHeaderSection = styled.section`
  display: flex;
  justify-content: start;
  gap: 5px;
  align-items: center;
`;

const ProfileImg = styled.div`
    width: ${props=>props.isComment?"25px":"30px"};
    height: ${props=>props.isComment?"25px":"30px"};
    border-radius: 50%;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

function PostHeader({ name, date, isComment }) {
    const [color, icon] = name2profile(name);
    return (
        <PostHeaderSection>
            <ProfileImg color={color} isComment={isComment}><img src={`${process.env.PUBLIC_URL}/assets/${icon}.png`} width ={isComment?"18px":"23px"} alt={name}/></ProfileImg>
            <b style={isComment&&{fontSize:"0.9rem"}}>{name}</b>
            <span style={{color:"#666"}}>·</span>
            <span style={{color:"#666"}}>{date}</span>
        </PostHeaderSection>
    );
}

export default PostHeader;