import React, { useEffect, useState } from 'react';
import Menu from 'components/Menu';
import { colors, fonts } from 'styles/styleOptions';
import { twitsUser } from 'apis/twitsUser.api';
import SearchInput from 'components/Search';
import styled from 'styled-components';
import Twit from 'components/Twit';
import Trend from 'components/Trend';
import Follow from 'components/Follow';
import Profiles from 'components/Profiles';
import Tabs from 'components/Tabs';

const Profile = ({ userObj }) => {
  const [twits, setTwits] = useState([]);

  const getUserTwit = async () => {
    console.log('getUserTwit', userObj.nickname);
    const response = await twitsUser(userObj.nickname);
    if (response) {
      console.log('getUserTwit', response.data);
      setTwits(response.data);
    } else {
      alert('유저 트윗 불러오기 실패');
    }
  };

  useEffect(() => {
    getUserTwit();
  }, []);
  return (
    <StyledRoot>
      <SideSection left={0}>
        <Menu userObj={userObj} />
      </SideSection>
      <MidSection>
        <ProfileContainer>
          <span>프로필</span>
          <Profiles userObj={userObj} />
        </ProfileContainer>
        <ListSection>
          {twits &&
            twits.map((twit, idx) => {
              return <Twit data={twit} type="detail" />;
            })}
        </ListSection>
        <Follow />
      </MidSection>
      <SideSection>
        <SearchInput />
        <Trend />
        <Follow />
      </SideSection>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  padding: 0 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MidSection = styled.div`
  height: 100%;
  width: 50%;
`;

const ProfileContainer = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  span {
    font-size: ${fonts.size.large};
    font-weight: ${fonts.weight.bold};
  }
`;

const ListSection = styled.div`
  height: 100%;
  overflow: scroll;
`;

const SideSection = styled.div`
  padding: 12px;
  position: sticky;
  top: 0;
  left: ${(props) => props.left};
`;

export default Profile;
