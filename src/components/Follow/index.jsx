import React from 'react';
import {StyledRoot,TrendsContainer,TrendsTitle,Follower,FollowerAvatar,FollowerUser,FollowerBtn,TrendsMore} from "./Style";
import follow from '../../data/follow.json';
import { Yongji } from 'asset/img/img';
function Follow() {
  return (
    <>
      <StyledRoot>
        <TrendsContainer>
          <TrendsTitle>
            내가 좋아할 만한 콘텐츠
          </TrendsTitle>
          {follow.map((follow) => (
            <Follower>
              <FollowerAvatar>
                <img src={Yongji} alt="임시 프로필 사진" />
                <FollowerUser>
                  <h3>{follow.name}</h3>
                  <span>{follow.hastag}</span>
                </FollowerUser>
              </FollowerAvatar>
              <FollowerBtn>팔로우</FollowerBtn>
            </Follower>
          ))}
          <TrendsMore>더 보기</TrendsMore>
        </TrendsContainer>
      </StyledRoot>
    </>
  );
}



export default Follow;
