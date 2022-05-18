import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { BORDER_RADIUS, colors, fonts } from 'styles/styleOptions';
import { editProfile } from 'apis/editProfile.api';
const Modify = ({ userObj }) => {
  const [form, setForm] = useState({ nickname: userObj.nickname, bio: '' });

  const onEditProfile = async () => {
    console.log('submitLogin 클릭', form);
    const response = await editProfile(userObj.nickname, form);
    if (response) {
      localStorage.removeItem('user');
      localStorage.setItem(
        'user',
        JSON.stringify({
          nickname: response.data.nickname,
          email: userObj.email,
          fullname: response.data.fullname,
        }),
      );
      window.location = '/profile';
    }
  };
  const handleInputChange = ({ target: { name, value } }) => {
    console.log('handleInputChange 발생');
    setForm({ ...form, [name]: value });
  };
  useEffect(() => {
    //getUserTwit();
  }, []);
  return (
    <StyledRoot>
      <Content>
        <p>
          <FontAwesomeIcon icon={faTwitter} size="2x" color={`${colors.blue[1]}`} />
        </p>
        <p>Edit Profile In Twitter</p>
      </Content>
      <Content>
        <form onSubmit={onEditProfile}>
          <input
            type="text"
            value={form.nickname}
            name="nickname"
            placeholder="변경할 nickname을 입력하시오"
            onChange={handleInputChange}
          ></input>
          <input
            type="text"
            value={form.bio}
            name="bio"
            placeholder="변경할 bio를 입력하시오"
            onChange={handleInputChange}
          ></input>
        </form>
      </Content>
      <Content>
        <span>
          <Btn
            border={colors.blue[1]}
            background={colors.blue[1]}
            color={colors.white[1]}
            onClick={onEditProfile}
          >
            프로필 변경하기
          </Btn>
        </span>
        <span>
          <Link to="/profile">
            <Btn border={colors.blue[1]} background={colors.white[1]} color={colors.blue[1]}>
              뒤로 가기
            </Btn>
          </Link>
        </span>
      </Content>
    </StyledRoot>
  );
};

export default Modify;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  p {
    font-size: ${fonts.size.large};
    font-weight: ${fonts.weight.bold};
    padding: 10px 0;
  }
  form {
    width: 25%;
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 20px;
    margin-top: 10px;
    border: none;
    border-bottom: 1px solid ${colors.blue[1]};
    outline-style: none;
  }
  span {
    width: 25%;
    margin-bottom: 1.5rem;
    color: ${colors.blue[1]};
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${(props) => props.border};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.bold};
`;
