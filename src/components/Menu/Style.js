import { colors, BORDER_RADIUS, fonts } from 'styles/styleOptions';
import styled from 'styled-components';

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const MenuContainer = styled.div`
  font-size: ${fonts.size.regular};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const TwitContainer = styled.div`
  width: 90%;
  button {
    width: 100%;
    padding: 12px 30px;
    color: ${colors.white[1]};
    font-weight: ${fonts.weight.bold};
    background-color: ${colors.blue[1]};
    border: 1px solid ${colors.blue[1]};
    border-radius: ${BORDER_RADIUS};
  }
`;
export const MenuWraper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  margin: 4px 0;
  width: fit-content;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: ${colors.grey[4]};
    border-radius: ${BORDER_RADIUS};
  }
  p {
    line-height: 24px;
    justify-content: center;
    align-content: center;
    margin: 0 20px;
  }
`;
export const Icon = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 0;
  width: fit-content;
  &:hover {
    background-color: ${colors.grey[4]};
    border-radius: ${BORDER_RADIUS};
  }
  img {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    margin: 0.3rem;
    line-height: 100%;
  }
  div {
    margin: 0 12px;
    font-size: ${fonts.size.small};

    p {
      &:last-child {
        color: ${colors.grey[1]};
      }
    }
  }
`;
