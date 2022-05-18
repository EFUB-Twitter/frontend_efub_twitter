import styled from 'styled-components';
import { colors, fonts, BORDER_RADIUS } from 'styles/styleOptions';
export const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;

  font-size: ${fonts.size.regular};
  height: fit-content;
  padding: 12px 16px 12px 16px;
  border: 1px solid ${colors.grey[3]};
  img {
    height: 3rem;
    width: 3rem;
    border-radius: ${BORDER_RADIUS};
    margin-right: 12px;
  }
`;
export const TwitWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    line-height: 20px;
    padding: 0.3rem;
    svg:hover {
      color: ${colors.blue[1]};
    }
  }
`;

export const TwitInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const Text = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  margin-right: 4px;
`;

export const TwitIcon = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 12px;
  svg :hover {
    cursor: pointer;
    color: ${colors.blue[1]};
  }
`;

export const TwitHash = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: wrap;
  div {
    color: ${colors.blue[1]};
    background-color: ${colors.white[1]};

    padding-right: 0.8rem;
  }
`;

export const TwitContent = styled.div`
  font-weight: ${fonts.weight.regular};
  cursor: pointer;
`;

export const TwitDetail = styled.div`
  border-top: 1px solid ${(props) => props.color};
  border-bottom: 1px solid ${(props) => props.color};
  span {
    margin-right: 0.8rem;
  }
`;
