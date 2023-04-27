import styled from "styled-components";
import {addLike} from "../../utils/api";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Heart = styled.span`
  user-select:none;
  color: red;
  cursor: pointer;
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

function Like({like,id}) {
    const [likeCount, setLikeCount] = useState(like);
    let isClicked = false;

    const heartClick = async (e) => {
        if (isClicked) return;
        isClicked = true;
        e.target.style.animation = "bounce 0.5s";
        setTimeout(async () => {
            await addLike(id);
            isClicked = false;
            e.target.style.animation = "none";
            setLikeCount(likeCount + 1);
        }, 500);
    }

    return (
        <Wrapper>
            <Heart className="material-icons" onClick={heartClick}>
                favorite
            </Heart>
            <span>{likeCount}</span>
        </Wrapper>
    );
}

export default Like;