import React, { useEffect, useState } from 'react';
import { colors, fonts } from 'styles/styleOptions';
import Twit from 'components/Twit';
import Menu from 'components/Menu';
import SearchInput from 'components/Search';
import Trend from 'components/Trend';
import Filter from 'components/Filter';
import styled from 'styled-components';
const HashTags = ({ userObj }) => {
  const [twits, setTwits] = useState([]);

  const getTwitsArr = (twitArr) => {
    setTwits(twitArr);
  };

  useEffect(() => {}, [twits]);
  return (
    <StyledRoot>
      <SideSection left={0}>
        <Menu userObj={userObj} />
      </SideSection>
      <MidSection>
        <HomeContainer>
          <span>탐색 하기</span>
        </HomeContainer>
        <ListWrap>
          {twits.map((twit, idx) => {
            console.log('twits 필터링 페이지', twit);
            return <Twit data={twit} type="" key={idx} />;
          })}
        </ListWrap>
      </MidSection>
      <SideSection>
        <Searchwrap>
          <SearchInput />
        </Searchwrap>
        <Filter getTwitsArr={getTwitsArr} userObj={userObj} />

        <Trend />
      </SideSection>
    </StyledRoot>
  );
};

export default HashTags;

const StyledRoot = styled.div`
  padding: 4px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SideSection = styled.div`
  position: sticky;
  top: 0;
  left: ${(props) => props.left};
`;
const MidSection = styled.div`
  width: 50%;
`;
const ListWrap = styled.div`
  overflow: visible;
`;

const Searchwrap = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.white[1]};
  padding: 6px 0;
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
