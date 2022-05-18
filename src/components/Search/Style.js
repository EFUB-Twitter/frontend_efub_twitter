import { colors, BORDER_RADIUS, fonts } from 'styles/styleOptions';
import styled from 'styled-components';
export const StyledRoot = styled.div`
  color: ${colors.grey[2]};
  background-color: ${colors.grey[4]};
  border-radius: ${BORDER_RADIUS};
  border: 0px solid ${colors.black[1]};
  padding: 0 12px;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    input {
      width: 90%;
      outline: none;
      background-color: ${colors.grey[4]};
      border: 0px solid ${colors.black[1]};
      border-radius: ${BORDER_RADIUS};
      padding: 8px 12px;
    }
  }
`;

export const Icon = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;
