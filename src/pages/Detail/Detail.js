import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import QueryString from 'qs';
import styled from 'styled-components';
import { twitDetail } from 'apis/twitDetail.api';
import Twit from 'components/Twit';
import Menu from 'components/Menu';
import SearchInput from 'components/Search';
import Trend from 'components/Trend';
import Follow from 'components/Follow';
import { colors, fonts } from 'styles/styleOptions';

const Detail = ({ userObj }) => {
  const [twit, setTwit] = useState(null);
  const { boardId } = useParams();
  const location = useLocation();
  const { nickname } = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(boardId, nickname);

  const onTwitDetail = async () => {
    const response = await twitDetail(boardId, nickname);

    if (response) {
      console.log('twitDetail', response.data);
      setTwit(response.data);
    } else {
      alert('오류 발생 : 트윗 불러오기 실패');
    }
  };

  useEffect(() => {
    onTwitDetail();
  }, []);

  return (
    <StyledRoot>
      <SideSection left={0}>
        <Menu userObj={userObj} />
      </SideSection>
      <MidSection>
        <HomeContainer>
          <span>트윗 보기</span>
        </HomeContainer>
        {twit && <Twit data={twit} type="detail" />}
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

export default Detail;

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
