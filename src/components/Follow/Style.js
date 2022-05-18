import styled from 'styled-components';
import { BORDER_RADIUS, colors, fonts } from 'styles/styleOptions';

export const StyledRoot = styled.div`
  margin: 12px 0;
  flex: 0.3;
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.grey[4]};
  border-radius: 20px;
  padding: 13px 20px;
`;
export const TrendsTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

export const Follower = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;
export const FollowerAvatar = styled.div`
  display: flex;

  img {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin-right: 12px;
    cursor: pointer;
  }
`;

export const FollowerUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  h3 {
    font-size: ${fonts.size.regular};
    font-weight: ${fonts.weight.bold};
  }
  span {
    color: ${colors.grey[2]};
    font-size: ${fonts.size.small};
  }
`;

export const FollowerBtn = styled.div`
  background-color: #000;
  cursor: pointer;
  color: ${colors.white[1]};
  padding: 0.8rem 1.2rem;
  border-radius: ${BORDER_RADIUS};

  font-weight: ${fonts.weight.bold};
`;

export const TrendsMore = styled.div`
  font-size: 17px;
  font-weight: 400;
  width: 100%;
  color: #1d9bf0;
  cursor: pointer;
`;
