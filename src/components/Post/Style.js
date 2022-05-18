import { colors, fonts, BORDER_RADIUS } from 'styles/styleOptions';
import styled from 'styled-components';

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

export const PostWrap = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 8px 0;
  width: 100%;
  height: ${(props) => props.height};
  outline: none;
  overflow: visible;
  border: 0px solid ${colors.black[1]};
  word-wrap: break-word;
`;

export const PostControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  align-items: center;
  button {
    padding: 3px 12px;
    color: ${colors.white[1]};
    font-weight: ${fonts.weight.bold};
    background-color: ${colors.blue[1]};
    border: 1px solid ${colors.blue[1]};
    border-radius: ${BORDER_RADIUS};
  }
`;
export const PostHashTags = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.8rem;
  /* flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;*/
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.bold};
  width: 90%;
`;
export const Hash = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  margin: 0.5rem 0;
  padding: 0.5rem 0.8rem;
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${(props) => props.color};
  &:hover {
    border-radius: ${BORDER_RADIUS};
    color: ${colors.white[1]};
    background-color: ${colors.blue[1]};
    border: 1px solid ${colors.blue[1]};
    cursor: pointer;
    svg {
      color: ${colors.white[1]};
    }
  }
`;
export const PostIcon = styled.div`
  width: 50%;
  line-height: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
