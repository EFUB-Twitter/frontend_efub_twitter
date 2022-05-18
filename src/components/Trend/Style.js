import styled from 'styled-components';
import { colors, font } from 'styles/styleOptions';

export const StyledRoot = styled.div`
  flex: 0.3;
`;
export const TrendsContainer = styled.div`
  background-color: ${colors.grey[4]};
  border-radius: 20px;
  padding: 13px 0;
`;
export const TrendsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 800;
  h2 {
    font-size: 20px;
    font-weight: 800;
    padding-left: 20px;
  }
`;
export const TrendsTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
export const TrendsList = styled.div`
  margin-top: 10px;
  span {
    color: #696262;
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
  }
  h4 {
    margin: 3px 0;
    font-size: 15px;
    font-weight: 700;
    color: #0f1419;
    display: flex;
  }
`;
export const TrendsMore = styled.div`
  font-size: 17px;
  font-weight: 400;
  text-align: left;
  color: #1d9bf0;
  padding: 10px 0 10px 20px;
  cursor: pointer;
`;
