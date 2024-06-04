import {
  LoginIcon,
  LogoContainer,
  LogoImg,
  NavItem,
  NavLink,
  NavList,
  Navbar,
} from "./NavigationBar.styled";

const NavigationBar = () => {
  return (
    <Navbar>
      <LogoContainer>
        <NavLink to="/">
          <LogoImg src="/spartahub_logo.png" alt="홈 로고" />
        </NavLink>
      </LogoContainer>
      <NavList>
        <NavItem>
          <NavLink to="/job">취업공유</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/study">스터디/프로젝트</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/board">자유게시판</NavLink>
        </NavItem>
      </NavList>
      <NavLink to="/login">
        <LoginIcon src="/login_icon.png" alt="로그인 아이콘" />
      </NavLink>
    </Navbar>
  );
};

export default NavigationBar;
