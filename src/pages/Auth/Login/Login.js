import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { BORDER_RADIUS, colors, fonts } from 'styles/styleOptions';
import { login } from 'apis/login.api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const submitLogin = async () => {
    console.log('submitLogin 클릭', form);

    const response = await login(form);
    //console.log(response);
    if (response) {
      const { email, fullname, nickname, token } = response.data;
      const userObj = JSON.stringify({
        fullname: fullname,
        email: email,
        nickname: email.split('@')[0],
      });
      if (token) {
        localStorage.setItem('user', userObj);
        window.location = '/';
      }
    } else {
      alert(' 아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요');
    }
  };

  const handleInputChange = ({ target: { name, value } }) => {
    console.log('handleInputChange 발생');
    setForm({ ...form, [name]: value });
  };
  return (
    <StyledRoot>
      <Content>
        <p>
          <FontAwesomeIcon icon={faTwitter} size="2x" color={`${colors.blue[1]}`} />
        </p>
        <p>Log In to Twitter</p>
      </Content>
      <Content>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            value={form.email}
            name="email"
            placeholder="phone, email, or username"
            onChange={handleInputChange}
          ></input>
          <input
            type="password"
            value={form.password}
            name="password"
            placeholder="password"
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
            onClick={submitLogin}
          >
            로그인
          </Btn>
        </span>
        <span>
          <Link to="/signup">
            <Btn border={colors.blue[1]} background={colors.white[1]} color={colors.blue[1]}>
              회원가입하러 가기
            </Btn>
          </Link>
        </span>
      </Content>
    </StyledRoot>
  );
};

export default Login;

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
