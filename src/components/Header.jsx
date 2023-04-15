import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 30px);
  max-width: 1170px;
  margin: 0 auto;
  height: 100%;
  padding: 0 10px 0 20px;
`;

const WriteButton = styled.button`
  background-color: var(--main-color900);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/title_italic.png"} alt="SNS.md"/>
        </Link>
        <Link to="/write">
          <WriteButton>게시글 작성</WriteButton>
        </Link>
      </HeaderContainer>
    </StyledHeader>
  );
}
  
export default Header;