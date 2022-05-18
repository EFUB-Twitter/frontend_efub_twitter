import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyWindow, faHashtag, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faEnvelope,
  faBookmark,
  faFileLines,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { colors } from 'styles/styleOptions';
import { ProfileImg } from '../../asset/img/img';
import {StyledRoot,LogoContainer,MenuContainer,TwitContainer,MenuWraper,Icon,UserContainer} from "./Style";
import { Link } from 'react-router-dom';



const MENUS = [
    { text: '홈', icon: faHouseChimneyWindow },
    {
      text: '탐색하기',
      icon: faHashtag,
    },
    {
      text: '알림',
      icon: faBell,
    },
    {
      text: '쪽지',
      icon: faEnvelope,
    },
    {
      text: '북마크',
      icon: faBookmark,
    },
    { text: '리스트', icon: faFileLines },
    { text: '프로필', icon: faUser },
    { text: '더보기', icon: faEllipsis },
  ];
  
  const Menu = ({ userObj }) => {
    return (
      <StyledRoot>
        <MenuContainer>
          <LogoContainer>
            <Link to="/">
              <Icon>
                {' '}
                <FontAwesomeIcon icon={faTwitter} size="2x" color={`${colors.blue[1]}`} />
              </Icon>
            </Link>
          </LogoContainer>
          <div>
            {MENUS.map((menu, idx) => (
              <MenuWraper key={idx}>
                <Icon>
                  <FontAwesomeIcon icon={menu.icon} size="lg" />
                </Icon>
                {menu.text === '프로필' ? (
                  <Link to="/profile">
                    <p>{menu.text}</p>
                  </Link>
                ) : menu.text === '홈' ? (
                  <Link to="/">
                    <p>{menu.text}</p>
                  </Link>
                ) :menu.text === '탐색하기'?(<Link to="/hashtag"><p>{menu.text}</p></Link>): (
                  <p>{menu.text}</p>
                )}
              </MenuWraper>
            ))}
          </div>
  
          <TwitContainer>
            <button>트윗하기</button>
          </TwitContainer>
        </MenuContainer>
  
        <Link to="/profile">
          <UserContainer>
         
            <img src={ProfileImg} alt="임시 프로필 이미지" />
              
   
            <div>
              <p color={`${colors.black[1]}`}>{userObj.nickname}</p>
              <p color={`${colors.grey[1]}`}>@{userObj.email.split('@')[0]}</p>
            </div>
            <Icon>
              <FontAwesomeIcon icon={faEllipsis} size="lg" />
            </Icon>
          </UserContainer>
        </Link>
      </StyledRoot>
    );
  };
  
  export default Menu;