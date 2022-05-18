import React, { useEffect, useState } from 'react';

import { colors, fonts } from 'styles/styleOptions';
import Menu from 'components/Menu';
import SearchInput from 'components/Search';
import styled from 'styled-components';
import Twit from 'components/Twit';
import Post from 'components/Post';
import Trend from 'components/Trend';
import Follow from 'components/Follow';
import { allTwits } from 'apis/allTwits.api';

const Home = ({ userObj }) => {
  console.log('Home userObj : ', userObj);

  const [twits, setTwits] = useState([]);

  const getAllTwits = async () => {
    const response = await allTwits();
    setTwits(response.data);
  };

  useEffect(() => {
    getAllTwits();
  }, []);

  return (
    <StyledRoot>
      <SideSection left={0}>
        <Menu userObj={userObj} />
      </SideSection>
      <MidSection>
        <HomeContainer>
          <span>홈</span>
        </HomeContainer>
        <ListSection>
          <Post userObj={userObj} />
          {twits.map((twit, idx) => {
            return <Twit data={twit} type="" key={idx} />;
          })}
        </ListSection>
      </MidSection>
      <SideSection>
        <Searchwrap>
          <SearchInput />
        </Searchwrap>

        <Trend />
        <Follow />
      </SideSection>
    </StyledRoot>
  );
};

export default Home;

const StyledRoot = styled.div`
  padding: 4px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MidSection = styled.div`
  width: 50%;
`;
const HomeContainer = styled.div`
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.white[1]};
  span {
    font-size: ${fonts.size.large};
    font-weight: ${fonts.weight.bold};
  }
`;

const ListSection = styled.div`
  overflow: visible;
`;
const SideSection = styled.div`
  position: sticky;
  top: 0;
  left: ${(props) => props.left};
`;

const Searchwrap = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.white[1]};
  padding: 6px 0;
`;
