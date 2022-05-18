import React from 'react';
import {StyledRoot,TrendsContainer,TrendsTitle,TrendsTop,TrendsList,TrendsMore,} from "./Style";
import trends from '../../data/trends.json';

function Trend() {
  return (
    <>
      <StyledRoot>
        <TrendsContainer>
          <TrendsTitle>
            <h2>나를 위한 트렌드</h2>
          </TrendsTitle>
          {trends.map((trend) => (
            <TrendsTop>
              <TrendsList>
                <span>{trend.trend}</span>
                <h4>{trend.hastag}</h4>
                <span>{trend.tweets}</span>
              </TrendsList>
              {/* <FiMoreHorizontal />*/}
            </TrendsTop>
          ))}
          <TrendsMore>더 보기</TrendsMore>
        </TrendsContainer>
      </StyledRoot>
    </>
  );
}export default Trend;